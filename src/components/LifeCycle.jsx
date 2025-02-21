import React, { Component, useEffect } from "react";

// export class LifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor: Компонент создан.");
//     let i = 0;
//     // this.id = setInterval(() => console.log(++i), 1000);
//     window.addEventListener("keydown", this.onKeyDown);
//   }

//   onKeyDown(e) {
//     console.log(e.key);
//   }

//   componentDidMount() {
//     console.log("componentDidMount: Компонент добавлен в DOM.");
//   }

//   shouldComponentUpdate(newProps, newState) {
//     console.log("shouldComponentUpdate: Компонент скоро обновится.");
//     console.log(newState, this.state);

//     return true;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("Предыдущее состояние:", prevState);
//     console.log("componentDidUpdate: Компонент обновлён.");
//     //и вдруг возникла ошибка
//     throw new Error();
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount: Компонент будет удалён из DOM.");
//     //Отписываемся от событий
//     // clearInterval(this.id);
//     window.removeEventListener("keydown", this.onKeyDown);
//   }

//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   render() {
//     console.log("render: Рендер компонента.");

//     return (
//       <div>
//         <h1>Счётчик: {this.state.count}</h1>
//         <button onClick={this.increment}>Увеличить</button>
//         <br />
//       </div>
//     );
//   }
// }

export function LifeCycle() {
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      console.log(++i);
    }, 1000);
    throw new Error();

    // return () => {
    //   console.log("componentWillUnmount");
    //   clearInterval(id);
    //   clearTimeout(timerId);
    // };
  }, []);

  return (
    <div>
      <h1>Счётчик</h1>
      <br />
    </div>
  );
}
