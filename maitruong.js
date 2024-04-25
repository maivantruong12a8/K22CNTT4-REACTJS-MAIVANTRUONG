import React, { Component } from 'react';

class EventForm1 extends Component {
    //hàm xử lý  sự kiện
    eventHandleClick1 = () => {
        alert("event handle 1");
    }
    eventHandleClick2 = () => {
        alert("event handle 2")
    }

    render() {
        return ( <
            div className = 'alert alert-danger' >
            <
            h2 > Event Handle < /h2> { /*gọi hàm xử lý sự kiện khi render */ } <
            button onClick = { this.eventHandleClick1() } > Click 1 < /button> { /* gọi hàm xử lý khi click */ } <
            button onClick = { this.eventHandleClick2() } > Click 2 < /button> <
            /div>
        );
    }
}

export default EventForm1;
import React, { Component } from 'react';
import EventForm1 from './components/EventForm1';

class App extends Component {
    render() {
        return ( <
            div className = 'container' >
            <
            h1 > Event form Demo < /h1> <
            EventForm1 / >
            <
            /div>
        );
    }
}

export default App;