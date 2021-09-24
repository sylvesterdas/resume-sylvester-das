const fs = require('fs-extra');
const { join } = require('path');

(async() => {

    const src = '../dist';
    const copy = './dist';

    await fs.remove(copy);
    await fs.copy(src, copy);
    await fs.remove(join(copy, 'out-tsc'));

})();
