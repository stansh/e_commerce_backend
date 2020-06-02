/* export const photos = [
    { src: '/images/cat.jpg' },
    { src: '/images/confused-guy.jpg' },
    { src: '/images/laugh.jpg' },
    { src: '/images/littleGirl.png' },
    { src: '/images/max.jpg' },
    { src: '/images/Michael.jpg' },
    { src: '/images/RickDalton.jpg '},
    { src: '/images/Toddler.jpg' },
    { src: '/images/trump.jpg' },
    { src: '/images/face.jpg' },
    { src: '/images/pg.jpg' },
    { src: '/images/dc5.png' }
    
  ]; */
const photos = fetch("https://api.imgflip.com/get_memes").then(response => response.json());
  

   
export default photos;


