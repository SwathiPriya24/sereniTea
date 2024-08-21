
import Card from 'react-bootstrap/Card';
import types from '../images/types of tea.jpg'
import brew from '../images/brewing.jpg'
import skin from '../images/skin.jpg'
import stress from '../images/stress.jpg'

function BlogCard() {
    return (
        <div className="container">
            <div className="row  d-flex justify-content-around px-0">
                <div className="col pt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='blogimg' variant="top" src={types} />
                        <Card.Body>
                            <Card.Title>The Ultimate Guide to Different Types of Tea"
                            </Card.Title>
                            <Card.Text>
                                Discover the diverse world of tea with our ultimate guide to different types of tea: black, green, white, oolong, herbal infusions, and more!
                            </Card.Text>
                            <a href=" https://mypositiviteas.com/blogs/news/the-ultimate-guide-what-are-the-different-types-of-tea"> <h4>Read More...</h4> </a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col pt-3">


                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='blogimg' variant="top" src={brew} />
                        <Card.Body>
                            <Card.Title> A Guide to Tea Varieties and Brewing Methods </Card.Title>
                            <Card.Text>
                                This time we're going to explore different tea varieties, the recommended brewing methods and the latest tea trends.                                </Card.Text>
                            <a href=" https://www.coffeefriend.co.uk/blog/tea/"> <h4>Read More...</h4></a>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col pt-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='blogimg' variant="top" src={skin} />
                        <Card.Body>
                            <Card.Title>Tea and Skincare</Card.Title>
                            <Card.Text>
                                It's no secret that tea is both delicious and good for you, and its health benefits are so extensive. <br /> Teas rich in antioxidants should be apart of your daily skin routine.
                            </Card.Text>
                            <a href=" https://teacultureoftheworld.com/blogs/all/teas-for-skin-radiance-and-health"><h4>Read More...</h4></a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col pt-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='blogimg' variant="top" src={stress} />
                        <Card.Body>
                            <Card.Title>Tea and Its Impact on Stress Reduction</Card.Title>
                            <Card.Text>
                                The Science Behind Tea and Stress Relief has been a foundation of health and wellness since ancient times. Tea contains a compound that have calming and soothing effects on the body</Card.Text>
                            <a href=" https://www.tinroofteas.com/tea-blog/tea-and-stress-relief-a-natural-path-to-serenity"><h4>Read More...</h4></a>
                        </Card.Body>
                    </Card>

                </div>
            </div >

        </div>

    );
}

export default BlogCard;





