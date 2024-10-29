# javascript-lotto-precourse

# 1. 프로젝트 목표

- 객체 지향 프로그래밍(OOP): 관련된 기능을 클래스로 나누어 객체 간의 협력으로 로또 발매기를 구현한다.
- 단위 테스트 작성: 기능별로 단위 테스트를 작성해 코드가 의도한 대로 작동하는지 검증한다.
- 프로그래밍 요구 사항 준수: 제한된 인덴트와 함수 길이를 준수하며, 간결하고 가독성 좋은 코드를 작성한다.

# 2. 프로젝트 소개

이 프로젝트는 간단한 로또 발매기로서, 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 결과와 수익률을 계산하고, 이를 출력하는 프로그램이다.

# 3. 기능 목록

1. 구입 금액, 당첨 번호, 보너스 번호 입력 기능
2. 로또 구매 개수 계산 및 구매 개수 출력 기능
3. 로또 번호 생성 및 저장 후 출력 기능
4. 로또 번호와 당첨 번호를 비교해 당첨 내역 출력 기능
5. 총 수익률 계산 후 수익률 출력 기능
6. 예외 처리 기능
   <br>
   <br>

# 4. 개발 중 체크리스트

## 1. 클래스 및 함수 구조

- 관련된 함수들을 하나의 클래스로 묶어서 작성했는가?
- 클래스는 필드, 생성자, 메서드 순서로 작성했는가?
- 한 클래스 또는 함수가 한 가지 기능만 수행하도록 분리했는가?
- 중복되는 코드가 있으면 별도의 함수로 분리했는가?
- 함수 길이 15줄 이하 규칙을 준수했는가?
- else문 대신 조건절에서 값을 반환하는 방식으로 설계했는가?

## 2. 요구 사항 검토

- 구입 금액, 당첨 번호, 보너스 번호 입력과 예외 처리를 구현했는가?
- 로또 번호를 1~45 범위에서 중복 없이 생성하는지 확인했는가?
- 오름차순 정렬된 로또 번호를 출력하는 기능을 구현했는가?
- 당첨 결과를 1등~5등까지 분류하여 계산하는 로직을 정확히 구현했는가?
- 총 수익률 계산과 출력 형식(소수점 둘째 자리 반올림)을 준수했는가?

## 3. 입출력 및 에러 처리

- 사용자의 입력값이 유효하지 않을 경우 "[ERROR]"로 시작하는 메시지를 출력하고, 다시 입력을 받도록 했는가?
- 예외 상황별로 에러 메시지를 출력하도록 구현했는가?
- 출력 형식을 요구 사항에 맞게 작성했는가?

## 4. 테스트 코드 작성

- 단위 테스트를 각 기능 단위로 작성했는가?
- UI제외 로직 부분만 단위 테스트했는가?
- 예외 상황에 대한 테스트 케이스를 충분히 작성했는가?
- 작은 단위의 테스트부터 작성하여 핵심 기능을 검증했는가?

## 5. 코드 스타일 및 컨벤션

- Node.js 20.17.0 버전인지 확인했는가?
- const 상수를 정의하여 의미 있는 이름을 부여하고 하드 코딩된 값 사용을 지양했는가?
- 3항 연산자를 사용하지 않았는가?

## 6. 추가 피드백 사항

- 기능 목록을 정기적으로 업데이트하여 최신 상태로 유지했는가?
- README.md 파일을 통해 프로젝트의 개요와 기능을 간결하게 설명했는가?
- 코드에서 하드 코딩된 값을 상수로 변경했는가?
- 중복된 코드가 있다면 리팩토링하여 줄였는가?
- 회고 작성 시 배운 점과 개선점을 정리했는가?
