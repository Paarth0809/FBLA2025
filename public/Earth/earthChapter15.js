import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';


export function startEarthChapter15() {
    const chapter15Text = `
       <h2>Chapter 15: Victory</h2>
       <p>After a long and grueling battle, the Fire Nation's forces are finally defeated. The combined strength of the Water Tribe, Earth Kingdom, and Fire Nation defectors has proven too much for them. The war is over.</p>
       <p>The Avatar has fulfilled their destiny, and peace is restored to the world. The nations begin to rebuild, and your leadership has shaped the future.</p>
       <p>As the dust settles, the team gathers to celebrate their hard-fought victory. The world is safe once more, thanks to your courage and determination.</p>
    `;
    updateStoryText(chapter15Text);
    setTimeout(() => {
            updateChoices([
                { text: "Continue", action: start }
            ]);
        }, 300);
    }