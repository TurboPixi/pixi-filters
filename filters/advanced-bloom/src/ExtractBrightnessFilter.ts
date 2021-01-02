import {vertex} from '@tools/fragments';
import fragment from './extract-brightness.frag';
import {Filter} from '@pixi/core';

/**
 * Internal filter for AdvancedBloomFilter to get brightness.
 * @class
 * @private
 */
class ExtractBrightnessFilter extends Filter {

    /**
     * @param {number} [threshold] Defines how bright a color needs to be extracted.
     */
    constructor(threshold: number = 0.5) {
        super(vertex, fragment);

        this.threshold = threshold;
    }

    /**
     * Defines how bright a color needs to be extracted.
     *
     * @member {number}
     * @default 0.5
     */
    get threshold() {
        return this.uniforms.threshold;
    }
    set threshold(value) {
        this.uniforms.threshold = value;
    }
}

export { ExtractBrightnessFilter };

