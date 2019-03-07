import { IAnimationStyles, IAnimationVariables } from '../interfaces/index';
import { IRawStyle, keyframes } from '@uifabric/merge-styles';

const MotionTimings = {
  accelerate: 'cubic-bezier(0.9, 0.1, 1, 0.2)',
  decelerate: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
  linear: 'cubic-bezier(0, 0, 1, 1)',
  standard: 'cubic-bezier(0.8, 0, 0.2, 1)'
};

const MotionDurations = {
  duration100: '100ms',
  duration200: '200ms',
  duration300: '300ms',
  duration400: '400ms',
  duration500: '500ms'
};

// Legacy values for timing functions and durations.
const EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
const EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
const DURATION_1 = '0.167s';
const DURATION_2 = '0.267s';
const DURATION_3 = '0.367s';
const DURATION_4 = '0.467s';

/**
 * Raw duration values and easing functions to be used in custom animations.
 */
export const AnimationVariables: IAnimationVariables = {
  /**
   * Similar to CSS `ease-in` timing function but with a more pronounced ending acceleration.
   * - `cubic-bezier(0.9, 0.1, 1, 0.2)`
   */
  accelerateEaseFunction: MotionTimings.accelerate,

  /**
   * Similar to CSS `ease-out` timing function but with a more pronounced start acceleration.
   * - `cubic-bezier(0.1, 0.9, 0.2, 1)`
   */
  decelerateEaseFunction: MotionTimings.decelerate,

  /**
   * Same as CSS `linear` timing function.
   * - `cubic-bezier(0, 0, 1, 1)`
   */
  linearEaseFunction: MotionTimings.linear,

  /**
   * Similar to CSS `ease-in-out` timing function but with faster acceleration in the middle.
   * - `cubic-bezier(0.8, 0, 0.2, 1)`
   */
  standardEaseFunction: MotionTimings.standard,

  /** Duration: `100ms` */
  duration100: MotionDurations.duration100,

  /** Duration: `200ms` */
  duration200: MotionDurations.duration200,

  /** Duration: `300ms` */
  duration300: MotionDurations.duration300,

  /** Duration: `400ms` */
  duration400: MotionDurations.duration400,

  /** Duration: `500ms` */
  duration500: MotionDurations.duration500,

  /**
   * - `cubic-bezier(0.1, 0.9, 0.2, 1)`
   * @deprecated
   */
  easeFunction1: EASING_FUNCTION_1,

  /**
   * - `cubic-bezier(.1,.25,.75,.9)`
   * @deprecated
   */
  easeFunction2: EASING_FUNCTION_2,

  /**
   * Duration: `167ms`
   * @deprecated
   */
  durationValue1: DURATION_1,

  /**
   * Duration: `267ms`
   * @deprecated
   */
  durationValue2: DURATION_2,

  /**
   * Duration: `367ms`
   * @deprecated
   */
  durationValue3: DURATION_3,

  /**
   * Duration: `467ms`
   * @deprecated
   */
  durationValue4: DURATION_4
};

/* Register the keyframes */

const FADE_IN: string = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});

const FADE_OUT: string = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
});

const SLIDE_RIGHT_IN10: string = _createSlideInX(-10);
const SLIDE_RIGHT_IN20: string = _createSlideInX(-20);
const SLIDE_RIGHT_IN40: string = _createSlideInX(-40);
const SLIDE_RIGHT_IN400: string = _createSlideInX(-400);
const SLIDE_LEFT_IN10: string = _createSlideInX(10);
const SLIDE_LEFT_IN20: string = _createSlideInX(20);
const SLIDE_LEFT_IN40: string = _createSlideInX(40);
const SLIDE_LEFT_IN400: string = _createSlideInX(400);
const SLIDE_UP_IN10: string = _createSlideInY(10);
const SLIDE_UP_IN20: string = _createSlideInY(20);
const SLIDE_DOWN_IN10: string = _createSlideInY(-10);
const SLIDE_DOWN_IN20: string = _createSlideInY(-20);

const SLIDE_RIGHT_OUT10: string = _createSlideOutX(10);
const SLIDE_RIGHT_OUT20: string = _createSlideOutX(20);
const SLIDE_RIGHT_OUT40: string = _createSlideOutX(40);
const SLIDE_RIGHT_OUT400: string = _createSlideOutX(400);
const SLIDE_LEFT_OUT10: string = _createSlideOutX(-10);
const SLIDE_LEFT_OUT20: string = _createSlideOutX(-20);
const SLIDE_LEFT_OUT40: string = _createSlideOutX(-40);
const SLIDE_LEFT_OUT400: string = _createSlideOutX(-400);
const SLIDE_UP_OUT10: string = _createSlideOutY(-10);
const SLIDE_UP_OUT20: string = _createSlideOutY(-20);
const SLIDE_DOWN_OUT10: string = _createSlideOutY(10);
const SLIDE_DOWN_OUT20: string = _createSlideOutY(20);

const SCALE_UP100: string = keyframes({
  from: { transform: 'scale3d(.98,.98,1)' },
  to: { transform: 'scale3d(1,1,1)' }
});

const SCALE_DOWN98: string = keyframes({
  from: { transform: 'scale3d(1,1,1)' },
  to: { transform: 'scale3d(.98,.98,1)' }
});

const SCALE_DOWN100: string = keyframes({
  from: { transform: 'scale3d(1.03,1.03,1)' },
  to: { transform: 'scale3d(1,1,1)' }
});

const SCALE_UP103: string = keyframes({
  from: { transform: 'scale3d(1,1,1)' },
  to: { transform: 'scale3d(1.03,1.03,1)' }
});

const ROTATE90: string = keyframes({
  from: { transform: 'rotateZ(0deg)' },
  to: { transform: 'rotateZ(90deg)' }
});

const ROTATE_N90: string = keyframes({
  from: { transform: 'rotateZ(0deg)' },
  to: { transform: 'rotateZ(-90deg)' }
});

/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
export const AnimationStyles: IAnimationStyles = {
  slideRightIn10: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN10}`, DURATION_3, MotionTimings.decelerate),
  slideRightIn20: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN20}`, DURATION_3, MotionTimings.decelerate),
  slideRightIn40: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN40}`, DURATION_3, MotionTimings.decelerate),
  slideRightIn400: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN400}`, DURATION_3, MotionTimings.decelerate),
  slideLeftIn10: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN10}`, DURATION_3, MotionTimings.decelerate),
  slideLeftIn20: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN20}`, DURATION_3, MotionTimings.decelerate),
  slideLeftIn40: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN40}`, DURATION_3, MotionTimings.decelerate),
  slideLeftIn400: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN400}`, DURATION_3, MotionTimings.decelerate),
  slideUpIn10: _createAnimation(`${FADE_IN},${SLIDE_UP_IN10}`, DURATION_3, MotionTimings.decelerate),
  slideUpIn20: _createAnimation(`${FADE_IN},${SLIDE_UP_IN20}`, DURATION_3, MotionTimings.decelerate),
  slideDownIn10: _createAnimation(`${FADE_IN},${SLIDE_DOWN_IN10}`, DURATION_3, MotionTimings.decelerate),
  slideDownIn20: _createAnimation(`${FADE_IN},${SLIDE_DOWN_IN20}`, DURATION_3, MotionTimings.decelerate),

  slideRightOut10: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT10}`, DURATION_3, MotionTimings.accelerate),
  slideRightOut20: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT20}`, DURATION_3, MotionTimings.accelerate),
  slideRightOut40: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT40}`, DURATION_3, MotionTimings.accelerate),
  slideRightOut400: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT400}`, DURATION_3, MotionTimings.accelerate),
  slideLeftOut10: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT10}`, DURATION_3, MotionTimings.accelerate),
  slideLeftOut20: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT20}`, DURATION_3, MotionTimings.accelerate),
  slideLeftOut40: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT40}`, DURATION_3, MotionTimings.accelerate),
  slideLeftOut400: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT400}`, DURATION_3, MotionTimings.accelerate),
  slideUpOut10: _createAnimation(`${FADE_OUT},${SLIDE_UP_OUT10}`, DURATION_3, MotionTimings.accelerate),
  slideUpOut20: _createAnimation(`${FADE_OUT},${SLIDE_UP_OUT20}`, DURATION_3, MotionTimings.accelerate),
  slideDownOut10: _createAnimation(`${FADE_OUT},${SLIDE_DOWN_OUT10}`, DURATION_3, MotionTimings.accelerate),
  slideDownOut20: _createAnimation(`${FADE_OUT},${SLIDE_DOWN_OUT20}`, DURATION_3, MotionTimings.accelerate),

  scaleUpIn100: _createAnimation(`${FADE_IN},${SCALE_UP100}`, DURATION_3, MotionTimings.decelerate),
  scaleDownIn100: _createAnimation(`${FADE_IN},${SCALE_DOWN100}`, DURATION_3, MotionTimings.decelerate),
  scaleUpOut103: _createAnimation(`${FADE_OUT},${SCALE_UP103}`, DURATION_1, EASING_FUNCTION_2),
  scaleDownOut98: _createAnimation(`${FADE_OUT},${SCALE_DOWN98}`, DURATION_1, EASING_FUNCTION_2),

  fadeIn100: _createAnimation(FADE_IN, MotionDurations.duration100, MotionTimings.linear),
  fadeIn200: _createAnimation(FADE_IN, MotionDurations.duration200, MotionTimings.linear),
  fadeIn300: _createAnimation(FADE_IN, MotionDurations.duration300, MotionTimings.linear),
  fadeIn400: _createAnimation(FADE_IN, MotionDurations.duration400, MotionTimings.linear),
  fadeIn500: _createAnimation(FADE_IN, MotionDurations.duration500, MotionTimings.linear),

  fadeOut100: _createAnimation(FADE_OUT, MotionDurations.duration100, MotionTimings.linear),
  fadeOut200: _createAnimation(FADE_OUT, MotionDurations.duration200, MotionTimings.linear),
  fadeOut300: _createAnimation(FADE_OUT, MotionDurations.duration300, MotionTimings.linear),
  fadeOut400: _createAnimation(FADE_OUT, MotionDurations.duration400, MotionTimings.linear),
  fadeOut500: _createAnimation(FADE_OUT, MotionDurations.duration500, MotionTimings.linear),

  rotate90deg: _createAnimation(ROTATE90, MotionDurations.duration100, EASING_FUNCTION_2),
  rotateN90deg: _createAnimation(ROTATE_N90, MotionDurations.duration100, EASING_FUNCTION_2)

  // expandCollapse 100/200/400, delay 100/200
};

function _createAnimation(animationName: string, animationDuration: string, animationTimingFunction: string): IRawStyle {
  return {
    animationName,
    animationDuration,
    animationTimingFunction,
    animationFillMode: 'both'
  };
}

function _createSlideInX(fromX: number): string {
  return keyframes({
    from: { transform: `translate3d(${fromX}px,0,0)` },
    to: { transform: `translate3d(0,0,0)` }
  });
}

function _createSlideInY(fromY: number): string {
  return keyframes({
    from: { transform: `translate3d(0,${fromY}px,0)` },
    to: { transform: `translate3d(0,0,0)` }
  });
}

function _createSlideOutX(toX: number): string {
  return keyframes({
    from: { transform: `translate3d(0,0,0)` },
    to: { transform: `translate3d(${toX}px,0,0)` }
  });
}

function _createSlideOutY(toY: number): string {
  return keyframes({
    from: { transform: `translate3d(0,0,0)` },
    to: { transform: `translate3d(0,${toY}px,0)` }
  });
}
