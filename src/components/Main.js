import React from 'react'
import Card from 'react-bootstrap/Card'
import lightbulb from '../img/lightbulb.png'
import CardDeck from 'react-bootstrap/CardDeck'
import gang from '../img/gang.png'
import bg1 from '../img/background1.jpg'
import './main.css'


function Main() {

    return (
        <div>
            <CardDeck style={{style: "flex", flexDirection: "row-reverse", margin: "20px", justifyContent: "space-around"}}>
                <Card className="w-25" border="dark">
                    <Card.Img variant="top" src={lightbulb} alt="lightbulb" />
                    <Card.Body>
                        <Card.Title>First post</Card.Title>
                        <Card.Text>
                            Today I made the first version of this website using amazingly powerful tool called Bootstrap!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="muted-text">18:20 16.10.2020</small>
                    </Card.Footer>
                </Card>
                <Card className="w-25" border="dark">
                    <Card.Img variant="top" src={gang} alt="gang" />
                    <Card.Body>
                        <Card.Title>Second post</Card.Title>
                        <Card.Text>
                            This post was made by rukozhop gang. Rukozhop gang - we are proud of ourselves!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="muted-text">18:41 16.10.2020</small>
                    </Card.Footer>
                </Card>
                <Card className="w-25" border="dark">
                    <Card.Img variant="top" src={bg1} alt="colorful background" />
                    <Card.Body>
                        <Card.Title>Third post</Card.Title>
                        <Card.Text>
                            Just exploring amazing possibilities I've found. Trying to figure out how this "CardDeck" is working, you know, how to shrink it a little. Add some borders, images, all that kind of stuff. Also checking if large amount of text is going to do anyhing to it. Also trying to put this date badge BOTTOM GODDAMNIT
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="muted-text">18:59 16.10.2020</small>
                    </Card.Footer>
                </Card>
                <Card className="w-25" border="dark">
                    <Card.Img variant="top" src={bg1} alt="colorful background" />
                    <Card.Body>
                        <Card.Title>Good news!</Card.Title>
                        <Card.Text>
                            I actually figured it out! (the footer thing) Good to know. I guess? 
                            <br/>Also the image'll be the same because I'm too lazy right now to search for something else. 
                            <br/>Also this is my last post for today.
                            <br/><br/>Or is it?
                            <br/><small>i've been using a lot of &lt;br/&gt; lately..</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="muted-text">19:14 16.10.2020</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Main