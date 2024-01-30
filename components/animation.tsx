import React from 'react';
import Lottie from 'react-lottie-player';

import lottieJson from '../public/animation.json';

const Animation = () => {
    return <Lottie loop animationData={lottieJson} play style={{ width: `60%`, height: `60%` }} />;
};

export default Animation;
