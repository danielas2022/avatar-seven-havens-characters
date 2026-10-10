import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

const characters = [
  {
    slug: 'char-pavi',
    prompt: 'Avatar Seven Havens character Pavi, 9 year old Indian girl earthbender, kind observant expression, green and earthen tunic, small rocks floating around hands, accompanied by a small cute fawn cat-monkey on her shoulder, Avatar Studios animated anime art style, vibrant cinematic lighting, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-nisha',
    prompt: 'Avatar Seven Havens character Nisha, 9 year old Indian girl twin avatar, fiery bold rebellious expression, red and orange flame-colored battle tunic, fire elemental sparks around fists, accompanied by a dark striped cat-monkey, Avatar Studios animated anime art style, vibrant cinematic lighting, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-jae',
    prompt: 'Avatar Seven Havens character Jae, 19 year old airbender soldier platoon leader, athletic build, short black hair, sky blue Ellora Bending Brigade uniform, holding wooden air glider staff, wind swirl effects, Avatar anime art style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-karthik',
    prompt: 'Avatar Seven Havens character Captain Karthik, 42 year old veteran airbender commander, handsome weathered face, short beard, dark blue and bronze fortress guard armor with cape, stoic authoritative gaze, Avatar anime art style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-daemin',
    prompt: 'Avatar Seven Havens character Daemin, 20 year old waterbender warrior, handsome athletic, cyan and teal water tribe battle vest, glowing spiral water whips around his hands and arms, anime art style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-agam',
    prompt: 'Avatar Seven Havens character Agam, 61 year old warm matriarch street vendor, kind smiling eyes, colorful embroidered shawl, standing by marketplace food stall with roasted flatbread, Avatar anime art style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-zi',
    prompt: 'Avatar Seven Havens character Zi, 26 year old female wasteland courier scout, sharp confident look, brass goggles on forehead, leather duster coat, crossbow on back, sandy ruins background, anime art style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-geet-ruhi',
    prompt: 'Avatar Seven Havens animals Geet and Ruhi, two adorable playful cat-monkeys, one light fawn colored and one dark tiger-striped, furry tails, sitting together on ancient sandstone ruins, Avatar creature animation style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-spirit-entity',
    prompt: 'Avatar Seven Havens dark spirit entity shadow beast, giant mysterious shadowy phantom monster with glowing violet eyes and misty black tentacles looming over ruined desert canyon, Avatar spirit world anime style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
  {
    slug: 'char-korra-legacy',
    prompt: 'Avatar Korra legendary monument, glowing blue spirit portal in ancient overgrown temple ruins, water and fire elemental carvings, 225 years ancient history, cinematic anime art style, no text',
    style: 'anime',
    width: 600,
    height: 750,
  },
];

async function generateOne(item) {
  return new Promise((resolve, reject) => {
    const child = spawn('node', ['.claude/skills/generate-image/main.mjs'], {
      stdio: ['pipe', 'pipe', 'inherit'],
    });

    let stdout = '';
    child.stdout.on('data', (d) => {
      stdout += d.toString();
    });

    child.on('close', (code) => {
      if (code !== 0) return reject(new Error(`Exit code ${code}`));
      try {
        const res = JSON.parse(stdout.trim());
        resolve({ slug: item.slug, ...res });
      } catch (err) {
        reject(new Error(`Failed to parse: ${stdout}`));
      }
    });

    child.stdin.write(JSON.stringify(item));
    child.stdin.end();
  });
}

async function main() {
  console.log('Generating character artwork...');
  const results = {};
  for (const item of characters) {
    try {
      console.log(`Generating ${item.slug}...`);
      const res = await generateOne(item);
      results[item.slug] = res.url;
      console.log(`Success: ${item.slug} -> ${res.url}`);
    } catch (err) {
      console.error(`Error for ${item.slug}:`, err.message);
    }
  }

  await fs.writeFile('src/data/generated-images.json', JSON.stringify(results, null, 2));
  console.log('Finished generating all character artwork! Saved mapping to src/data/generated-images.json');
}

main();
