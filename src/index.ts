import './CSS/style.css';
import { renderMessage, updateMessage } from './renderDOM';

interface MessageData {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  price: string;
  quantity: string;
  points: string;
  promo: string;
  promoLineOne: string;
  promoLineTwo: string;
  disclaimerLineOne: string;
  disclaimerLineTwo: string;
  position: number
}

window.addEventListener('message', (event) => {
  
  if (event.data === 'clearLocalStorage') {
    localStorage.clear();
    location.reload()
  }
})


function sortPlaylistByPosition(playlist: MessageData[]): MessageData[] {
  return playlist.sort((a, b) => a.position - b.position);
}

async function main(): Promise<void> {
  let playerId = localStorage.getItem('playerId');

  while (!playerId) {
    playerId = prompt('Please enter the player ID:');

    if (playerId) {
      localStorage.setItem('playerId', playerId);
    } else {
      alert('Player ID is required to continue');
      return;
    }
  }

  async function fetchData(): Promise<MessageData[]> {
    try {
      const response = await fetch(`https://signage-api-production.up.railway.app/player/playlist?id=${playerId}`);
      if (!response.ok) {
        throw new Error('Invalid player ID');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  let playlist: MessageData[];
  try {
    playlist = await fetchData();
    playlist = sortPlaylistByPosition(playlist); 
  } catch (error) {
    alert('Invalid player ID. Please enter a valid player ID.');
    localStorage.removeItem('playerId');
    return main();
  }

  setInterval(async () => {
    try {
      playlist = await fetchData();
      playlist = sortPlaylistByPosition(playlist);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }, 8000 * playlist.length);


  renderMessage(playlist[0]);

  let index = 1;
  setInterval(() => {
    updateMessage(playlist[index]);
    index = (index + 1) % playlist.length;
  }, 8000);
}

main().catch((error) => console.error(error));