import React from 'react'
import {Chart} from 'react-charts'
import {Container} from "react-bootstrap";
import Header from "./Header";

function Temperature() {
    const data = React.useMemo(
        () => [
            {
                label: 'Temperature',
                data: [[0, 3], [1, 5], [2, 3], [3, 2], [4, 3]]
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
            <h2>Temperature Report</h2>

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

export default Temperature;
