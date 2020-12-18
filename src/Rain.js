import React from 'react'
import {Chart} from 'react-charts'
import {Container} from "react-bootstrap";
import Header from "./Header";

function Rain() {
    const data = React.useMemo(
        () => [
            {
                label: 'Rain',
                data: [[0, 5], [1, 0], [2, 4], [3, 5], [4, 9]]
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
            <h2>Rain Report</h2>

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

export default Rain;
