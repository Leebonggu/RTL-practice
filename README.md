## 테스트하는 이유

더 안정적인 어플리케이션을 위해서 여러 방법으로 테스트가 필요하다.

## 테스팅으로 얻는 이점

- 디버깅 시간 단축. 데이터가 잘못나왔다면 UI문제인지, DB문제인지 테스트해봐야하는데, 테스트 코드가 있다면 이 과정을 쉽게 할 수 있다.
- 안정적 어플리케이션. 테스트 코드와 함께 작성된 코드의 어플리케이션이 되기 때문에 안정적일 어플리케이션이 된다.
- 재설계 시간 단축.
- 기타. 무엇가를 더 구현해야할 때 더 용이하게 할 수 있다.

## RTL

- RTL은 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축된다.

- DOM Testing Library란 DOM 노드를 테스트하기 위한 매우 가벼운 솔루션
- CRA로 생성된 프로젝트는 즉시 RTL를 지원한다. 그렇지 않은 경우 설치하면 된다.

```bash
pnpm add -D @testing-libaray/react
```

- 리액트 컴포넌트를 테스트하는 가벼운 솔루션
- 행위 주도 테스트 (vs 구현 주도 테스트)

### 주요 API


## DOM

- Document Object Model
- XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스

### 웹 페이지 빌드 과정(Critical Rendering Path: CRP)

브라우저가 서버에서 페이지에 대한 HTML 응답을 받고 화편에 표시하기 전까지의 단계. 웹 브라우저가 HTMl 문서를 읽고, 스타일 입히고, 뷰포트에 표시하난 과정을 말한다.

- HTML요소들의 구조화된 표현이 DOM.
- HTML 렌더링 엔진에 의해 분석되고 분석이 끝난 HTML파일이 DOM.
- DOM은 문서를 객체모델로 만들어 JS로 다루기 쉽게 만들어 진 것.

- HTML -> 파싱 -> DOM
  - Bytes
  - Charracters
  - Tokens: HTML표준에 따른 토큰화
  - Nodes
  - DOM
- CSS -> 파싱 ->CSSOM
- JS -> JS만나면 위의 파싱을 잠시 멈춤

- RENDER TREE -> 만들어진 OM을 결합. 화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함
- LAYOUT -> 크기 계산
- PAINT -> 레이아웃에 실제로 그려냄

## TDD

- 실제 코드를 작성하기 전에 테스트 코드를 먼저 작성
- 테스트 코드를 작성한 후 그 테스트 코드를 Pass할 수 있는 실제 코드를 작성
- Red, Green

### 장점

- 소스코드 안정감
- 디버깅 소요시간 감소
- 소스 코드 하나하나를 더욱 신중하게 짤 수 있음

## 이벤트발생에는 FireEvent API

## Query 사용 우선 순위

- getByRole: element의 Role, Name을 넣어줘야함> 최우선 순위

- Queries Accessible to Everyone Queries that reflect the experience of visual/mouse users as well as those that use assistive technology.
  - getByRole: This can be used to query every element that is exposed in the accessibility tree. With the name option you can filter the returned elements by their accessible name. This should be your top preference for just about everything. There's not much you can't get with this (if you can't, it's possible your UI is inaccessible). Most often, this will be used with the name option like so: getByRole('button', {name: /submit/i}). Check the list of roles.
  - getByLabelText: This method is really good for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.
  getByPlaceholderText: A placeholder is not a substitute for a label. But if that's all you have, then it's better than alternatives.
  - getByText: Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).
  getByDisplayValue: The current value of a form element can be useful when navigating a page with filled-in values.

- Semantic Queries HTML5 and ARIA compliant selectors. Note that the user experience of interacting with these attributes varies greatly across browsers and assistive technology.
  - getByAltText: If your element is one which supports alt text (img, area, input, and any custom element), then you can use this to find that element.
  - getByTitle: The title attribute is not consistently read by screenreaders, and is not visible by default for sighted users
- Test IDs
  - getByTestId: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).


## userEvent, FireEvent

- userEvent: fireEvent를 사용해서 만들어진 것.  Element의 타입에 따라 적절한 반응을 보여준다. 실제 유저가 클릭하는 행위를 더 잘 표현되도록 하는 방법이다.

## let revert

- 추가
- 추가2