
# 역할 기반 접근 제어(Role-based access control )


[역할 기반 접근 제어](https://ko.wikipedia.org/wiki/%EC%97%AD%ED%95%A0_%EA%B8%B0%EB%B0%98_%EC%A0%91%EA%B7%BC_%EC%A0%9C%EC%96%B4)
는 권한이 있는 사용자들에게 시스템 접근을 통제하는 한 방법

RBAC 주요 규칙
1.역할 할당 
2.역할 권한 부여
3.권한 부여

# 출처
https://en.m.wikipedia.org/wiki/Role-based_access_control

# 번역

Within an organization, roles are created for various job functions. 
조직 내에서 다양한 직무 기능에 대한 역할이 생성됩니다.

The permissions to perform certain operations /are assigned to/ specific roles. 
권한은 / 수행할 수 있는 /특정 작업들 /할당 됩니다./특정 역할들에


Members or staff (or other system users) are assigned particular roles, 
and through those role assignments /acquire the permissions /needed to perform particular system functions. 

회원들 또는 스태프(또는 다른 시스템 사용자들) /할당 됩니다/특정 역할들이,
그리고 이러한 역할 할당을 통해/  얻습니다./권한들/수행할 수 있는/특정 시스템 기능을

Since users are not assigned permissions directly,
 but only acquire them through their role (or roles), 
 management of individual user rights becomes a matter of simply assigning appropriate roles 
 to the user's account; this simplifies common operations, such as adding a user, or changing a user's department.

사용자에게 권한이 직접 할당되지 않기 때문에
자신의 역할(또는 역할)을 통해서만 획득할 수 있습니다.
개별 사용자 권한 관리는 단순히 사용자의 계정에 적절한 역할을 할당하는 것이 문제가 됩니다. 
이는 사용자 추가 또는 사용자 부서 변경과 같은 일반적인 작업을 단순화합니다.

Role based access control interference is a relatively new issue 
in security applications(응용 프로그램), where multiple user accounts 
with dynamic access levels may lead to encryption key instability,
allowing an outside user to exploit the weakness for unauthorized access. 
 
역할 기반 접근 제어 간섭(방해)는 /비교적/새문제이다/보안 응용 프로그램에서
동적 액세스 수준을 가진 여러 사용자 계정이 있는 경우 / 암호화 키가 불안정해질 수 있습니다.
외부 사용자가 무단 액세스의 취약성을 이용할 수 있습니다.
 
Key sharing applications within dynamic virtualized environments
have shown some success 
in addressing this problem.
동적 가상화 환경 내 키 공유 애플리케이션/ 성공을 거두었다/이 문제를 해결하는 데 있어


Three primary rules are defined for RBAC:

Role assignment: A subject can exercise a permission only if the subject has selected or been assigned a role.
Role authorization: A subject's active role must be authorized for the subject. 
With rule 1 above, this rule ensures that users can take on only roles for which they are authorized.

역할 할당: 제목의 역할이 선택되었거나 할당된 경우에만 권한을 행사할 수 있습니다.
역할 권한 부여: 제목의 활성 역할이 해당 제목에 대해 인증되어야 합니다.
위의 규칙 1에서 이 규칙은 사용자가 권한이 부여된 역할만 맡을 수 있도록 합니다.

Permission authorization: A subject can exercise a permission only if the permission is authorized for the subject's active role.
With rules 1 and 2, this rule ensures that users can exercise only permissions for which they are authorized. 
Additional constraints may be applied as well, and roles can be combined in a hierarchy where higher-level roles subsume permissions owned by sub-roles.
With the concepts of role hierarchy and constraints, one can control RBAC to create or simulate lattice-based access control (LBAC). Thus RBAC can be considered to be a superset of LBAC.

권한 인증: 제목은 제목의 활성 역할에 대해 권한이 승인된 경우에만 권한을 행사할 수 있습니다.
규칙 1과 2를 사용하면 이 규칙은 사용자가 권한이 부여된 권한만 행사할 수 있도록 합니다.
추가 제약 조건도 적용될 수 있으며 역할은 하위 역할이 소유한 사용 권한을 더 높은 수준의 역할이 포함하는 계층에서 결합될 수 있습니다.
역할 계층 및 제약 조건의 개념을 사용하여 RBAC를 제어하여 LBAC(격자 기반 액세스 제어)를 생성하거나 시뮬레이션할 수 있습니다. 따라서, RBAC는 LBAC의 상위 집합으로 간주될 수 있다.