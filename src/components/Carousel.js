import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Card from '../components/Card';

import BeerApp from '../Images/websiteImage.png'
import WeatherApp from '../Images/Weather-dashboard.png'
import EmployeeApp from '../Images/employee-directory-image.png'
import NoteTaker from '../Images/Note_taker_homepage.png'


class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note Taker',
                    subTitle: 'An app that lets you take notes',
                    imgSrc: NoteTaker,
                    link: "https://sleepy-thicket-78623.herokuapp.com/",
                    selected: false
                },
                {
                    id: 1,
                    title: 'Weather Dashboard',
                    subTitle: 'Clean and easy to use weather app',
                    imgSrc: WeatherApp,
                    link: "https://taroche.github.io/Weather-Dashboard/",
                    selected: false
                },
                {
                    id: 2,
                    title: 'Road to Beer',
                    subTitle: 'An app to tell you about the bars in an area when you type in an areacode',
                    imgSrc: BeerApp,
                    link: "https://josephjlyons.github.io/DraughtPicker/",
                    selected: false
                },
                {
                    id: 3,
                    title: 'Employee Directory',
                    subTitle: 'Shows a directory that you can search through',
                    imgSrc: EmployeeApp,
                    link: "https://taroche.github.io/Employee-Directory/",
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        console.log(id)

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />)
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;