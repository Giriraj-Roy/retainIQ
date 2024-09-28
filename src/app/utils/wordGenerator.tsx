/**
 * 
 * An Utility function to generate random words for Product chips and Images
 * @params : numWords - specifies the number of words required
 * @returns an array of length numWords specified
 */


export function getRandomWords(numWords: number) {

  const wordsArray = paragraph.split(" ");

  const randomWords = [];
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    randomWords.push(wordsArray[randomIndex]);
  }

  return randomWords;
}

const paragraph = `Fashion and design play a pivotal role in shaping consumer culture and personal expression. The fashion industry is not merely about clothing; it encompasses a vast array of products, tools, and creative processes that contribute to the overall aesthetic and functionality of garments. From the initial concept to the final product, the journey of fashion design involves meticulous planning, innovative thinking, and a keen understanding of market trends.
At the heart of fashion design is the process of product development, which includes designing, planning, and creating items that resonate with target consumers. This involves extensive research into fabrics, colors, and styles that align with current trends while also considering sustainability and ethical practices. Designers often create mood boards to visualize their ideas, drawing inspiration from various sources such as art, culture, and historical references. This creative brainstorming leads to sketches that evolve into tangible products.`;
