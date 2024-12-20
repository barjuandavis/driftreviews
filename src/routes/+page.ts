import type { PageLoad } from './$types';
import { getAllMouse, getAllMousepad, getAllKeyboard } from '$lib/prismic';

export const load: PageLoad = async () => {
  const [mice, mousepads, keyboards] = await Promise.all([
    getAllMouse(),
    getAllMousepad(),
    getAllKeyboard(),
  ]);

  return {
    mice,
    mousepads,
    keyboards,
  };
};