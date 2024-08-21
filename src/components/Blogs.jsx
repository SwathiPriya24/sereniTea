
import Card from 'react-bootstrap/Card';
import types from '../images/types of tea.jpg'
import brew from '../images/brewing.jpg'
import skin from '../images/skin.jpg'
import stress from '../images/stress.jpg'
import React from 'react';
import teaData from './blogDatas'
function Blogs() {


  

const teaData = [
  {
      id: 1,
      name: "Green Tea",
      description: "Green tea is cherished for its light, fresh flavor. The leaves are quickly heated after harvesting to prevent oxidation, preserving their green color and delicate taste. Popular varieties include Sencha, Matcha, and Dragon Well.",
      benefits: [
          "Rich in antioxidants",
          "Promotes weight loss",
          "Reduces the risk of cardiovascular diseases"
      ]
  },
  {
      id: 2,
      name: "Black Tea",
      description: "Black tea is known for its bold and robust flavor, fully oxidized to give it a dark color and strong taste. Popular varieties include Assam, Darjeeling, and Earl Grey.",
      benefits: [
          "Boosts heart health",
          "Reduces bad cholesterol",
          "Improves gut health"
      ]
  },
  {
      id: 3,
      name: "White Tea",
      description: "White tea is the least processed of all teas, made from young leaves and buds. It has a subtle, delicate flavor and a light color. Popular varieties include Silver Needle and White Peony.",
      benefits: [
          "Protects skin from aging",
          "Improves dental health",
          "Boosts immunity"
      ]
  },
  {
      id: 4,
      name: "Oolong Tea",
      description: "Oolong tea is partially oxidized, offering a flavor profile that falls between green and black tea. Popular varieties include Tieguanyin and Da Hong Pao.",
      benefits: [
          "Aids in weight management",
          "Improves brain function",
          "Reduces the risk of heart disease"
      ]
  },
  {
      id: 5,
      name: "Chamomile Tea",
      description: "Chamomile tea is a herbal infusion made from dried chamomile flowers, known for its calming properties.",
      benefits: [
          "Reduces menstrual pain",
          "Improves sleep quality",
          "Supports digestive health"
      ]
  },
  {
      id: 6,
      name: "Peppermint Tea",
      description: "Peppermint tea, made from peppermint leaves, has a strong, minty flavor and is naturally caffeine-free.",
      benefits: [
          "Soothes digestive issues",
          "Relieves headaches and migraines",
          "Boosts energy levels"
      ]
  },
  {
      id: 7,
      name: "Ginger Tea",
      description: "Ginger tea, made from ginger root, offers a spicy and invigorating flavor.",
      benefits: [
          "Eases nausea",
          "Reduces muscle pain",
          "Supports digestion"
      ]
  },
  {
      id: 8,
      name: "Hibiscus Tea",
      description: "Hibiscus tea is a tart and vibrant herbal tea made from the dried petals of the hibiscus flower. It has a deep red color and a refreshing, slightly sour taste.",
      benefits: [
          "Lowers blood pressure",
          "Supports liver health",
          "Promotes weight loss"
      ]
  },
  {
      id: 9,
      name: "Rooibos Tea",
      description: "Rooibos tea, also known as red tea, is a South African herbal tea made from the leaves of the rooibos plant. It has a sweet, nutty flavor and is naturally caffeine-free.",
      benefits: [
          "Rich in antioxidants",
          "Supports heart health",
          "Reduces inflammation"
      ]
  },
  {
      id: 10,
      name: "Echinacea Tea",
      description: "Echinacea tea is a herbal tea made from the echinacea plant, known for its immune-boosting properties. It has a slightly floral and earthy flavor.",
      benefits: [
          "Boosts immune system",
          "Reduces inflammation",
          "Helps treat the common cold"
      ]
  },
  {
      id: 11,
      name: "Matcha Tea",
      description: "Matcha tea is a type of green tea made from finely ground powdered green tea leaves. It has a vibrant green color and a rich, umami flavor.",
      benefits: [
          "High in antioxidants",
          "Enhances calm and relaxation",
          "Boosts metabolism"
      ]
  },
  {
      id: 12,
      name: "Yerba Mate",
      description: "Yerba mate is a traditional South American tea made from the leaves of the yerba mate plant. It has a robust, earthy flavor and contains caffeine.",
      benefits: [
          "Boosts energy and mental focus",
          "Rich in antioxidants and nutrients",
          "Enhances physical performance"
      ]
  },
  {
      id: 13,
      name: "Lemon Balm Tea",
      description: "Lemon balm tea is a calming herbal tea made from the leaves of the lemon balm plant. It has a mild lemony flavor and is naturally caffeine-free.",
      benefits: [
          "Reduces anxiety and stress",
          "Improves sleep quality",
          "Supports digestive health"
      ]
  },
  {
      id: 14,
      name: "Dandelion Tea",
      description: "Dandelion tea is a herbal tea made from the roots or leaves of the dandelion plant. It has a slightly bitter, earthy flavor.",
      benefits: [
          "Supports liver health",
          "Aids digestion",
          "Acts as a diuretic"
      ]
  },
  {
      id: 15,
      name: "Sage Tea",
      description: "Sage tea is a herbal tea made from the leaves of the sage plant. It has a strong, slightly peppery flavor and is naturally caffeine-free.",
      benefits: [
          "Supports cognitive health",
          "Reduces inflammation",
          "Improves digestion"
      ]
  },
  {
      id: 16,
      name: "Chai Tea",
      description: "Chai tea is a spiced black tea traditionally made with a blend of spices like cinnamon, cardamom, cloves, and ginger. It has a rich, warming flavor.",
      benefits: [
          "Improves heart health",
          "Aids digestion",
          "Anti-inflammatory properties"
      ]
  },
  {
      id: 17,
      name: "Turmeric Tea",
      description: "Turmeric tea is a herbal tea made from the turmeric root. It has a warm, slightly spicy flavor and is known for its bright yellow color.",
      benefits: [
          "Anti-inflammatory properties",
          "Supports joint health",
          "Boosts immune system"
      ]
  },
  {
      id: 18,
      name: "Jasmine Tea",
      description: "Jasmine tea is a fragrant tea made by infusing green or black tea leaves with jasmine flowers. It has a delicate, floral flavor.",
      benefits: [
          "Rich in antioxidants",
          "Promotes weight loss",
          "Reduces stress"
      ]
  },
  {
      id: 19,
      name: "Pu-erh Tea",
      description: "Pu-erh tea is a unique type of fermented tea from China. It has a rich, earthy flavor that becomes more complex with age.",
      benefits: [
          "Supports weight loss",
          "Reduces cholesterol levels",
          "Improves digestion"
      ]
  },
  {
      id: 20,
      name: "Lavender Tea",
      description: "Lavender tea is a soothing herbal tea made from the flowers of the lavender plant. It has a light, floral flavor and is naturally caffeine-free.",
      benefits: [
          "Reduces anxiety and stress",
          "Improves sleep quality",
          "Supports digestive health"
      ]
  }
];



  return (
    <section className='blogSection'>
      <div className="container">
        <h1 className='text-center'>Welcome to the Wonderful World of Tea! </h1>
        <p>Tea is one of the most popular beverages in the world, known for its soothing aroma and various health benefits. Have you ever wondered what makes tea green, black, or anywhere in between? Let's dive into the world of tea and explore the different types and varieties available.</p>

        <p>True teas all come from the same plant - Camellia sinensis, also known as the tea plant. Native to Southeast Asia, this versatile plant is the source of many beloved tea varieties. Interestingly, there is only one tea plantation in the United States due to the specific climate requirements of the tea plant. Let's explore some of the most popular types of tea and their unique benefits.</p>


<div className="row g-3">



        {teaData.map((tea) => (
            <div className="col-lg-4">
        <div className="blogCardMain" key={tea.id}>
          <h5>{tea.id}, {tea.name}</h5>
          <p>{tea.description}</p>
          <p><b>Benefits</b></p>
          <ul>
            {tea.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        </div>
      ))}
    
 
</div>

        {/* <div className="blogCardMain">

          
          <h5>{tea.id}, {tea.name}</h5>
          <p>{tea.description}</p>
          <p><b>Benefits</b></p>
          <ul>
            {tea.map((benefit, index) => (
              <li key={index}>{benefit.benefits}</li>
            ))}
          </ul>
        </div> */}

       
      </div>
    </section>
  );
}

export default Blogs;





