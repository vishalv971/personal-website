import selfServiceImage from '../assets/self_service_hotels.jpg';
import selfServiceDemo from '../assets/self_service_demo.mp4';
import imageClassificationImage from '../assets/image_classification.png';
import imageClassificationDemo from '../assets/image_classification_demo.mp4';
import logisticCropMgmtImage from '../assets/logistic_crop.jpg';

const PROJECT_DESC = [
    {
        id: 1,
        name: 'Self Service for Hotels',
        stack: 'Python, Flask, MySQL, HTML5, CSS3, JavaScript, Bootstrap v4',
        image: selfServiceImage,
        video: selfServiceDemo
    },
    {
        id: 2,
        name: 'Image Classification and Ranking of Hotels',
        stack: 'Python, Flask, HTML5, CSS3, JavaScript, Bootstrap v4, Machine Learning',
        image: imageClassificationImage,
        video: imageClassificationDemo
    },
    {
        id: 3,
        name: 'Logistic Crop Management',
        stack: 'Node.js, HTML5, CSS3, MySQL, Express, Ajax',
        image: logisticCropMgmtImage,
        video: null
    }
]

export default PROJECT_DESC;