부모로부터 props -> state가 아니다.

시간이 지나도 변하지 않는다. -> state가 아니다.

컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가? -> state가 아니다.





loadable => 동적 import 코드스플리팅에 용이 => 해당 컴포넌트가 불러질 떄 파일을 읽는다. 해당 파일에 접근하는 순간 속도가 느려질 수 있으나 초기 속도를 개선할 수 있다.

용량이 큰 라이브러리를 초기에 불러오지 않고 loadable을 사용하는 것도 하나의 방법