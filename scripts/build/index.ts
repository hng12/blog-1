import * as kleur from 'kleur';
import manifest from '~/scripts/build/manifest.ts';

const main = async () => {
  try {
    await manifest();
    console.log(kleur.green('▲ Saved manifest.json to static folder'));
  } catch (error) {
    console.log(kleur.bgRed('▲ Failed to generate manifest.json'), error);
  }
};

main();
