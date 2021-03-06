```
title: 테스트 케이스를 위한 환경 구성 (테스트 픽스처 설정) 
startDate: 2021-04-28
```
---



테스트 데이터베이스와 테스트 픽스처 설정




테스트 코드를 실행하기 위해서는 테스트 데이터베이스와 데이터는 테스트 픽스처가 필요합니다.


테스트 픽스텨는 System Under Test를 실행하기 위해 필요한 모든 것을 말합니다.



0.별도 관리가 필요 없는 메모리 데이터베이스 : sqlite
SQLite는 MySQL나 PostgreSQL와 같은 데이터베이스 관리 시스템이지만, 서버가 아니라 응용 프로그램에 넣어 사용하는 비교적 가벼운 데이터베이스


이 데이터 베이스를 사용하기 위해서는 3개의 파일을 변경하고 추가해야 합니다.




첫번째 init_test.go 파일을 생성합니다.
init_test.go 파일에는 다음 3가지 설정을 합니다.
0.config https://github.com/jinzhu/configor
config.InitConfig("config/config.json")
1.echo 프레임 워크 설정
2.DB 엔진 설정
xormEngine = common.InitTest()




init_test.go 전체 코드
package controllers
```

import (
	"github.com/go-playground/validator/v10"
	"github.com/go-xorm/xorm"
	"github.com/labstack/echo"
	_ "github.com/mattn/go-sqlite3"
	"goods-donation-service/common"
	"goods-donation-service/config"
)

var (
	echoApp          *echo.Echo
	xormEngine       *xorm.Engine
	handleWithFilter func(handlerFunc echo.HandlerFunc, c echo.Context) error
)

func init() {
	config.InitConfig("config/config.json")
	config.Config.Encrypt.GoodsEncryptKey = "+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWn"

	xormEngine = common.InitTest()

	echoApp = echo.New()
	echoApp.Validator = &CustomValidator{validator: validator.New()}
	db := common.InitContextDB(xormEngine)

	handleWithFilter = func(handlerFunc echo.HandlerFunc, c echo.Context) error {
		return db(handlerFunc)(c)
	}
}

type CustomValidator struct {
	validator *validator.Validate
}

func (cv *CustomValidator) Validate(i interface{}) error {
	return cv.validator.Struct(i)
}


```


두번째 test.go 파일에 sqlite를 사용하겠다고 코드를 추가합니다.
comon 디렉토리에 test.go파일에 sqlite를 사용하겠다고 코드를 입력합니다.
engine, err := xorm.NewEngine("sqlite3", ":memory:")


test.go 전체 코드
```
package common


import (
	"github.com/go-xorm/xorm"
	log "github.com/sirupsen/logrus"
	"os"
	"runtime"
	"xorm.io/core"
)

func InitTest() *xorm.Engine {
	runtime.GOMAXPROCS(1)
	// Log as JSON instead of the default ASCII formatter.
	log.SetFormatter(&log.JSONFormatter{})

	// Output to stdout instead of the default stderr
	// Can be any io.Writer, see below for File example
	log.SetOutput(os.Stdout)

	// Only log the warning severity or above.
	log.SetLevel(log.InfoLevel)

	engine, err := xorm.NewEngine("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	engine.ShowSQL(true)
	engine.Logger().SetLevel(core.LOG_INFO)

	return engine
}


```



세번째 fixture_test.go 파일을 생성합니다.
fixture_test.go 에서는 테스트 코드를 작성할 때 사용할 TABLE을 설정합니다.
```
	xormEngine.Sync2(
		new(entities.User),
		new(entities.Company),
	)

```


또한 YML에 데이터 TABLE에 추가하는 코드를 설정합니다.
fixtures, err := testfixtures.NewFolder(xormEngine.DB().DB, &testfixtures.SQLite{}, "../testdata/db_fixtures")
../testdata/db_fixtures 경로에 있는 yml 파일을 sqlLite DB에 (메모리 DB)에 추가하겠다.


fixture_test.go 전체 코드

```
package controllers

import (
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"goods-donation-service/entities"
	"gopkg.in/testfixtures.v2"
)

type DatabaseFixture struct {
}

func (DatabaseFixture) setUpDefault() {
	xormEngine.Sync2(
		new(entities.User),
		new(entities.Company),
	)

	fixtures, err := testfixtures.NewFolder(xormEngine.DB().DB, &testfixtures.SQLite{}, "../testdata/db_fixtures")
	fmt.Println("=== RUN DatabaseFixture.setUpDefault")

	if err != nil {
		panic(err)
	}
	testfixtures.SkipDatabaseNameCheck(true)

	if err := fixtures.Load(); err != nil {
		panic(err)
	}
	fmt.Println("=== FINISH DatabaseFixture.setUpDefault")
}

```
