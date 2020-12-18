import React from 'react'
import {Chart} from 'react-charts'
import {Container} from "react-bootstrap";
import Header from "./Header";

function Wind() {
    const data = React.useMemo(
        () => [
            {
                label: 'Wind',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            {primary: true, type: 'linear', position: 'bottom'},
            {type: 'linear', position: 'left'}
        ],
        []
    )

    return (
        <div>
            <Header/>
            <br/>
            <h2>Wind Report</h2>

            <Container>
                <div
                    style={{
                        paddingTop: '30px',
                        width: '100%',
                        height: '300px'
                    }}
                >
                    <Chart data={data} axes={axes}/>
                </div>
            </Container>
        </div>
    )
}

export default Wind;
