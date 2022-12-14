import { AnimatorEx } from "../LTUtils/AnimatorEx";
import ArrayEx from "../LTUtils/ArrayEx";

export class LTSimpleAnimator {

    private _animators: Laya.Animator[];
    public get animators(): Laya.Animator[] {
        return this._animators;
    }

    private _targetAnimName: string;
    public set targetAnimName(value: string) {
        this._targetAnimName = value;
        if (this.updateImd) {
            this.UpdateAnim();
        }
    }

    private _speed: number;
    public set speed(value: number) {
        if (this._speed == value) return;
        this._speed = value;
        for (let i = 0; i < this._animators.length; ++i) {
            this._animators[i].speed = this._speed;
        }
    }

    private _currentAnimName: string;
    public get currentAnimName(): string {
        return this._currentAnimName;
    }

    public updateImd: boolean = true;

    public noFade: boolean = false;

    constructor(...animators: Laya.Animator[]) {
        this._animators = animators;
        this._speed = 1;
    }

    public UpdateAnim(force: boolean = false) {
        if (this._targetAnimName == null) return;
        if (this._currentAnimName != this._targetAnimName || force) {
            for (let animator of this._animators) {
                if (this._currentAnimName != null && !this.noFade) {
                    animator.crossFade(this._targetAnimName, 0.1);
                    // animator.play(this._targetAnimName, 0, 0);
                } else {
                    animator.play(this._targetAnimName, 0, 0);
                }
            }
            this._currentAnimName = this._targetAnimName;
        }
    }

    public SwitchAnimObj(...animators: Laya.Animator[]) {
        this._animators = animators;
        let cacheCurrentAnim = this._currentAnimName;
        this._currentAnimName = null;
        this.targetAnimName = cacheCurrentAnim;
    }

    public RemoveAnimator(animator: Laya.Animator) {
        ArrayEx.Remove(this._animators, animator);
    }

    public AddAnimator(animator: Laya.Animator, noPlay: boolean = false) {
        if (animator == null) {
            console.error("????????????animator??????");
            return;
        }
        if (!noPlay) {
            let cacheAnimator = this._animators[0];
            let playTime = 0;
            if (cacheAnimator != null) {
                playTime = cacheAnimator.getCurrentAnimatorPlayState().normalizedTime;
            }
            animator.play(this.currentAnimName, 0, playTime);
        }
        this._animators.push(animator);
    }

    public GetStateLength(stateName: string): number {
        if (this._animators.length == 0) return 0;
        let getState = AnimatorEx.GetStateByName(this._animators[0], stateName);
        if (getState == null) return 0;
        return getState.clip.duration();
    }

}