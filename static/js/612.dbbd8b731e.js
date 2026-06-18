/*! LICENSE: 612.dbbd8b731e.js.LICENSE.txt */
"use strict";(globalThis.rspackChunkol_slmap=globalThis.rspackChunkol_slmap||[]).push([[612],{1743(){},6618(t,e,i){var r=i(5077),n=(0,r.AH)`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;i.d(e,{q:()=>n})},666(t,e,i){var r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=t=>{throw TypeError(t)},s=(t,e,i,o)=>{for(var s,a=o>1?void 0:o?n(e,i):e,l=t.length-1;l>=0;l--)(s=t[l])&&(a=(o?s(e,i,a):s(a))||a);return o&&a&&r(e,i,a),a},a=(t,e,i)=>e.has(t)||o("Cannot "+i),l=(t,e,i)=>(a(t,e,"read from private field"),i?i.call(t):e.get(t)),h=(t,e,i)=>e.has(t)?o("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),d=(t,e,i,r)=>(a(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i);i.d(e,{Cc:()=>s,OV:()=>d,S7:()=>l,VK:()=>h})},7822(t,e,i){var r=i(4373),n=i(2598),o=i(7475),s=i(666),a=i(5077),l=i(1588),h=class extends n._{constructor(){super(...arguments),this.localize=new o.c(this)}render(){return(0,a.qy)`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};h.css=r.$,(0,s.Cc)([(0,l.EM)("wa-spinner")],h)},2808(t,e,i){var r=i(5077),n=(0,r.AH)`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;i.d(e,{J:()=>n})},2272(t,e,i){var r=i(9298),n={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseYear:"Choose year",clearEntry:"Clear entry",close:"Close",closeCalendar:"Close calendar",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",incompleteDate:"Enter a complete date.",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",numCharacters:t=>1===t?"1 character":`${t} characters`,numCharactersRemaining:t=>1===t?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousDecade:"Previous decade",previousMonth:"Previous month",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>1===t?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>1===t?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectionCleared:"Selection cleared",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,startDate:"Start date",today:"Today",toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out",am:"AM",chooseTime:"Choose time",closeTimeInput:"Close time picker",dayPeriod:"AM/PM",hour:"Hour",minute:"Minute",now:"Now",pm:"PM",second:"Second",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker."};(0,r.XC)(n),i.d(e,{k:()=>n})},3335(t,e,i){var r="";function n(t){}function o(){return"".replace(/\/$/,"")}function s(){if(!r){let t=document.querySelector("[data-fa-kit-code]");t&&(r=t.getAttribute("data-fa-kit-code")||"")}return r}i.d(e,{Mp:()=>s,hO:()=>o,jP:()=>n})},9675(t,e,i){var r=i(8232),n=i(2598),o=i(666),s=i(5077),a=i(1588),l=class extends n._{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r.W))},this.handleInteraction=t=>{let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return s.S$?[]:[{observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let i of e.observedAttributes)t.add(i);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener?.(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!s.S$&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){let t=this.value;this.updateFormValue(t)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),!this.hasAttribute("disabled")&&(s.S$||this.matches(":disabled"))||this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){let e=new FormData;for(let i of t)e.append(this.name,i);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],i=t[1],r=t[2];r||(r=this.validationTarget),this.internals.setValidity(e,i,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&i),this.customStates.set("user-valid",e&&i)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=t,"restore"===e&&this.resetValidity(),this.updateValidity()}):(this.value=t,"restore"===e&&this.resetValidity(),this.updateValidity())}setValue(...t){let[e,i]=t;this.internals.setFormValue(e,i)}get allValidators(){return[...this.constructor.validators||[],...this.validators||[]]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate)return void this.resetValidity();let t=this.allValidators;if(!t?.length)return;let e={customError:!!this.customError},i=this.validationTarget||this.input||void 0,r="";for(let i of t){let{isValid:t,message:n,invalidKeys:o}=i.checkValidity(this);!t&&(r||(r=n),o?.length>=0&&o.forEach(t=>e[t]=!0))}r||(r=this.validationMessage),this.setValidity(e,r,i)}};l.formAssociated=!0,(0,o.Cc)([(0,a.MZ)({reflect:!0})],l.prototype,"name",2),(0,o.Cc)([(0,a.MZ)({type:Boolean})],l.prototype,"disabled",2),(0,o.Cc)([(0,a.MZ)({state:!0,attribute:!1})],l.prototype,"valueHasChanged",2),(0,o.Cc)([(0,a.MZ)({state:!0,attribute:!1})],l.prototype,"hasInteracted",2),(0,o.Cc)([(0,a.MZ)({attribute:"custom-error",reflect:!0})],l.prototype,"customError",2),(0,o.Cc)([(0,a.MZ)({attribute:!1,state:!0,type:Object})],l.prototype,"validity",1),i.d(e,{q:()=>l})},501(t,e,i){var r=i(5077),n=(0,r.AH)`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    fill: currentColor;
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;i.d(e,{L:()=>n})},7171(t,e,i){i.d(e,{Xr:()=>d,Hh:()=>h,cl:()=>l,pA:()=>a});var r=i(3335),n="7.2.0",o=[{name:"default",resolver:(t,e="classic",i="solid")=>(function(t,e,i){let o,s=(o="solid","chisel"===e&&(o="chisel-regular"),"etch"===e&&(o="etch-solid"),"graphite"===e&&(o="graphite-thin"),"jelly"===e&&(o="jelly-regular","duo-regular"===i&&(o="jelly-duo-regular"),"fill-regular"===i&&(o="jelly-fill-regular")),"jelly-duo"===e&&(o="jelly-duo-regular"),"jelly-fill"===e&&(o="jelly-fill-regular"),"notdog"===e&&("solid"===i&&(o="notdog-solid"),"duo-solid"===i&&(o="notdog-duo-solid")),"notdog-duo"===e&&(o="notdog-duo-solid"),"slab"===e&&(("solid"===i||"regular"===i)&&(o="slab-regular"),"press-regular"===i&&(o="slab-press-regular")),"slab-press"===e&&(o="slab-press-regular"),"thumbprint"===e&&(o="thumbprint-light"),"utility"===e&&(o="utility-semibold"),"utility-duo"===e&&(o="utility-duo-semibold"),"utility-fill"===e&&(o="utility-fill-semibold"),"whiteboard"===e&&(o="whiteboard-semibold"),"classic"===e&&("thin"===i&&(o="thin"),"light"===i&&(o="light"),"regular"===i&&(o="regular"),"solid"===i&&(o="solid")),"duotone"===e&&("thin"===i&&(o="duotone-thin"),"light"===i&&(o="duotone-light"),"regular"===i&&(o="duotone-regular"),"solid"===i&&(o="duotone")),"sharp"===e&&("thin"===i&&(o="sharp-thin"),"light"===i&&(o="sharp-light"),"regular"===i&&(o="sharp-regular"),"solid"===i&&(o="sharp-solid")),"sharp-duotone"===e&&("thin"===i&&(o="sharp-duotone-thin"),"light"===i&&(o="sharp-duotone-light"),"regular"===i&&(o="sharp-duotone-regular"),"solid"===i&&(o="sharp-duotone-solid")),"brands"===e&&(o="brands"),o),a=(0,r.hO)();if(a)return`${a}/${s}/${t}.svg`;let l=(0,r.Mp)();return l.length>0?`https://ka-p.fontawesome.com/releases/v${n}/svgs/${s}/${t}.svg?token=${encodeURIComponent(l)}`:`https://ka-f.fontawesome.com/releases/v${n}/svgs/${s}/${t}.svg`})(t,e,i),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){let{family:i,variant:r}=e;if("duotone"===i||"sharp-duotone"===i||"notdog-duo"===i||"notdog"===i&&"duo-solid"===r||"jelly-duo"===i||"jelly"===i&&"duo-regular"===r||"utility-duo"===i||"thumbprint"===i){let i=[...t.querySelectorAll("path")],r=i.find(t=>!t.hasAttribute("opacity")),n=i.find(t=>t.hasAttribute("opacity"));if(!r||!n)return;if(r.setAttribute("data-duotone-primary",""),n.setAttribute("data-duotone-secondary",""),e.swapOpacity&&r&&n){let t=n.getAttribute("opacity")||"0.4";r.style.setProperty("--path-opacity",t),n.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},i(4800).g],s=new Set;function a(t){s.add(t)}function l(t){s.delete(t)}function h(t){return o.find(e=>e.name===t)}function d(){return"classic"}},9218(t,e,i){function r(t,e){let i={waitUntilFirstUpdate:!1,...e};return(e,r)=>{let{update:n}=e,o=Array.isArray(t)?t:[t];e.update=function(t){o.forEach(e=>{if(t.has(e)){let n=t.get(e),o=this[e];n!==o&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](n,o)}}),n.call(this,t)}}}i.d(e,{w:()=>r})},8212(t,e,i){var r=()=>({checkValidity(t){let e=t.input,i={message:"",isValid:!0,invalidKeys:[]};if(!e)return i;let r=!0;if("checkValidity"in e&&(r=e.checkValidity()),r)return i;if(i.isValid=!1,"validationMessage"in e&&(i.message=e.validationMessage),!("validity"in e))return i.invalidKeys.push("customError"),i;for(let t in e.validity)"valid"!==t&&e.validity[t]&&i.invalidKeys.push(t);return i}});i.d(e,{i:()=>r})},1679(t,e,i){var r={small:"s",medium:"m",large:"l"},n=new Set;function o(t,e){e in r&&!n.has(`${t}:${e}`)&&(n.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${r[e]}" instead. The long-form value will be removed in the next major version.`))}i.d(e,{b:()=>o})},6277(t,e,i){var r=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{let e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return!!this.host.childNodes&&[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===Node.ELEMENT_NODE){if("wa-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t,e){return e&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[e]:"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){let t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}};i.d(e,{X:()=>r})},7475(t,e,i){var r=i(2272),n=i(9298),o=class extends n.c2{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};(0,n.XC)(r.k),i.d(e,{c:()=>o})},8232(t,e,i){var r=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};i.d(e,{W:()=>r})},4373(t,e,i){var r=i(5077),n=(0,r.AH)`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`;i.d(e,{$:()=>n})},9866(t,e,i){var r=i(5077),n=(0,r.AH)`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;i.d(e,{M:()=>n})},4800(t,e,i){var r={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">\x3c!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--\x3e<path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --\x3e<path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},n={name:"system",resolver:(t,e="classic",i="solid")=>{let n=r[i][t]??r.regular[t]??r.regular["circle-question"];if(n)return`data:image/svg+xml,${encodeURIComponent(n)}`;return""}};i.d(e,{g:()=>n})},2053(t,e,i){var r=i(8212),n=i(9675),o=i(8232),s=i(1679),a=i(6277),l=i(2808),h=i(6618),d=i(9866),c=i(9218),u=i(7475),g=i(666),p=i(1588),m=i(9898),f=i(7288),v=i(496);let _=Symbol.for(""),w=t=>{if(t?.r===_)return t?._$litStatic$},y=(t,...e)=>({_$litStatic$:e.reduce((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:_}),b=new Map,C=t=>(e,...i)=>{let r,n,o=i.length,s=[],a=[],l,h=0,d=!1;for(;h<o;){for(l=e[h];h<o&&void 0!==(r=w(n=i[h]));)l+=r+e[++h],d=!0;h!==o&&a.push(n),s.push(l),h++}if(h===o&&s.push(e[o]),d){let t=s.join("$$lit$$");void 0===(e=b.get(t))&&(s.raw=s,b.set(t,e=s)),i=a}return t(e,...i)},x=C(v.qy);C(v.JW),C(v.ej);var E=class extends n.q{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new a.X(this,"[default]","start","end"),this.localize=new u.c(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,(0,r.i)()]}handleSizeChange(){(0,s.b)(this.localName,this.size)}constructLightDOMButton(){let t=document.createElement("button");for(let e of this.attributes)"style"!==e.name&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if("submit"!==this.type&&"reset"!==this.type||!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new o.W)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,i=!1,r=!1,n=!1;[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE?"wa-icon"===t.localName?(i=!0,e||(e=void 0!==t.label)):n=!0:t.nodeType===Node.TEXT_NODE&&(t.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=i&&!r&&!n,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?y`a`:y`button`;return x`
      <${e}
        part="base"
        class=${(0,m.H)({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:"rtl"===this.localize.dir(),"has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${(0,f.J)(t?void 0:this.disabled)}
        type=${(0,f.J)(t?void 0:this.type)}
        title=${this.title}
        name=${(0,f.J)(t?void 0:this.name)}
        value=${(0,f.J)(t?void 0:this.value)}
        href=${(0,f.J)(t?this.href:void 0)}
        target=${(0,f.J)(t?this.target:void 0)}
        download=${(0,f.J)(t?this.download:void 0)}
        rel=${(0,f.J)(t&&this.rel?this.rel:void 0)}
        role=${(0,f.J)(t?void 0:"button")}
        aria-disabled=${(0,f.J)(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?x`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?x`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};E.shadowRootOptions={...n.q.shadowRootOptions,delegatesFocus:!0},E.css=[h.q,d.M,l.J],(0,g.Cc)([(0,p.P)(".button")],E.prototype,"button",2),(0,g.Cc)([(0,p.P)("slot:not([name])")],E.prototype,"labelSlot",2),(0,g.Cc)([(0,p.wk)()],E.prototype,"invalid",2),(0,g.Cc)([(0,p.wk)()],E.prototype,"isIconButton",2),(0,g.Cc)([(0,p.MZ)()],E.prototype,"title",2),(0,g.Cc)([(0,p.MZ)({reflect:!0})],E.prototype,"variant",2),(0,g.Cc)([(0,p.MZ)({reflect:!0})],E.prototype,"appearance",2),(0,g.Cc)([(0,p.MZ)({reflect:!0})],E.prototype,"size",2),(0,g.Cc)([(0,c.w)("size")],E.prototype,"handleSizeChange",1),(0,g.Cc)([(0,p.MZ)({attribute:"with-caret",type:Boolean,reflect:!0})],E.prototype,"withCaret",2),(0,g.Cc)([(0,p.MZ)({attribute:"with-start",type:Boolean})],E.prototype,"withStart",2),(0,g.Cc)([(0,p.MZ)({attribute:"with-end",type:Boolean})],E.prototype,"withEnd",2),(0,g.Cc)([(0,p.MZ)({type:Boolean})],E.prototype,"disabled",2),(0,g.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],E.prototype,"loading",2),(0,g.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],E.prototype,"pill",2),(0,g.Cc)([(0,p.MZ)()],E.prototype,"type",2),(0,g.Cc)([(0,p.MZ)({reflect:!0})],E.prototype,"name",2),(0,g.Cc)([(0,p.MZ)({reflect:!0})],E.prototype,"value",2),(0,g.Cc)([(0,p.MZ)({reflect:!0})],E.prototype,"href",2),(0,g.Cc)([(0,p.MZ)()],E.prototype,"target",2),(0,g.Cc)([(0,p.MZ)()],E.prototype,"rel",2),(0,g.Cc)([(0,p.MZ)()],E.prototype,"download",2),(0,g.Cc)([(0,p.MZ)({attribute:"formaction"})],E.prototype,"formAction",2),(0,g.Cc)([(0,p.MZ)({attribute:"formenctype"})],E.prototype,"formEnctype",2),(0,g.Cc)([(0,p.MZ)({attribute:"formmethod"})],E.prototype,"formMethod",2),(0,g.Cc)([(0,p.MZ)({attribute:"formnovalidate",type:Boolean})],E.prototype,"formNoValidate",2),(0,g.Cc)([(0,p.MZ)({attribute:"formtarget"})],E.prototype,"formTarget",2),(0,g.Cc)([(0,c.w)("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),(0,g.Cc)([(0,c.w)("href")],E.prototype,"handleHrefChange",1),(0,g.Cc)([(0,c.w)("loading",{waitUntilFirstUpdate:!0})],E.prototype,"handleLoadingChange",1),E=(0,g.Cc)([(0,p.EM)("wa-button")],E),E.disableWarning?.("change-in-update")},9561(t,e,i){var r,n=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},o=i(501),s=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}},a=i(9218),l=i(2598),h=i(7171),d=i(666),c=i(5077),u=i(1588),g=i(8632),p=Symbol(),m=Symbol(),f=new Map,v=class extends l._{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let i;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=(0,c.qy)`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let i=this.shadowRoot.querySelector("[part='svg']");return"function"==typeof e.mutator&&e.mutator(i,this),this.svg}try{if(!(i=await fetch(t,{mode:"cors"})).ok)return 410===i.status?p:m}catch{return m}try{let t=document.createElement("div");t.innerHTML=await i.text();let e=t.firstElementChild;if(e?.tagName?.toLowerCase()!=="svg")return p;r||(r=new DOMParser);let n=r.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");if(!n)return p;return n.part.add("svg"),document.adoptNode(n)}catch{return p}}}connectedCallback(){super.connectedCallback(),(0,h.pA)(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),(0,h.cl)(this)}async getIconSource(){let t=(0,h.Hh)(this.library),e=this.family||(0,h.Xr)();if(this.name&&t){let i;try{i=await t.resolver(this.name,e,this.variant,this.autoWidth)}catch{i=void 0}return{url:i,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:e}=await this.getIconSource(),i=e?(0,h.Hh)(this.library):void 0;if(!t){this.svg=null;return}let r=f.get(t);r||(r=this.resolveIcon(t,i),f.set(t,r));let o=await r;if(o===m&&f.delete(t),t===(await this.getIconSource()).url){if((0,g.qb)(o)){this.svg=o;return}switch(o){case m:case p:this.svg=null,this.dispatchEvent(new n);break;default:this.svg=o.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new s)}}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(t)}updated(t){super.updated(t);let e=(0,h.Hh)(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let i=this.shadowRoot?.querySelector("svg");i&&e?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:(0,c.qy)`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};v.css=o.L,(0,d.Cc)([(0,u.wk)()],v.prototype,"svg",2),(0,d.Cc)([(0,u.MZ)({reflect:!0})],v.prototype,"name",2),(0,d.Cc)([(0,u.MZ)({reflect:!0})],v.prototype,"family",2),(0,d.Cc)([(0,u.MZ)({reflect:!0})],v.prototype,"variant",2),(0,d.Cc)([(0,u.MZ)({attribute:"auto-width",type:Boolean,reflect:!0})],v.prototype,"autoWidth",2),(0,d.Cc)([(0,u.MZ)({attribute:"swap-opacity",type:Boolean,reflect:!0})],v.prototype,"swapOpacity",2),(0,d.Cc)([(0,u.MZ)()],v.prototype,"src",2),(0,d.Cc)([(0,u.MZ)()],v.prototype,"label",2),(0,d.Cc)([(0,u.MZ)({reflect:!0})],v.prototype,"library",2),(0,d.Cc)([(0,u.MZ)({type:Number,reflect:!0})],v.prototype,"rotate",2),(0,d.Cc)([(0,u.MZ)({type:String,reflect:!0})],v.prototype,"flip",2),(0,d.Cc)([(0,u.MZ)({type:String,reflect:!0})],v.prototype,"animation",2),(0,d.Cc)([(0,a.w)("label")],v.prototype,"handleLabelChange",1),(0,d.Cc)([(0,a.w)(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],v.prototype,"setIcon",1),(0,d.Cc)([(0,u.EM)("wa-icon")],v)},2598(t,e,i){var r,n=i(666),o=i(5077),s=i(1588),a=(0,o.AH)`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,l=class extends o.WF{constructor(){super(),(0,n.VK)(this,r,!1),this.initialReflectedProperties=new Map,this.didSSR=o.S$||!!this.shadowRoot,this.customStates={set:(t,e)=>{if(this.internals?.states)try{e?this.internals.states.add(t):this.internals.states.delete(t)}catch(t){if(String(t).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw t}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}for(let[t,e]of(this.customStates.set("wa-defined",!0),this.constructor.elementProperties))"inherit"===e.default&&void 0!==e.initial&&"string"==typeof t&&this.customStates.set(`initial-${t}-${e.initial}`,!0)}static get styles(){return[a,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,e,i){(0,n.S7)(this,r)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),(0,n.OV)(this,r,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(t){if(this.didSSR&&!this.hasUpdated){let e=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});e.error=t,this.dispatchEvent(e)}throw t}}setStyle(t,e){if(!this.style){if(null!=e){let i=this.getAttribute("style")||"";i&&(i+=" "),this.setAttribute("style",`${i}${t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}: ${e};`)}return}this.style[t]=e}setStyleProperty(t,e){if(!this.style){if(null!=e){let i=this.getAttribute("style")||"";i&&(i+=" "),this.setAttribute("style",`${i}${t}: ${e};`)}return}this.style.setProperty(t,e)}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};r=new WeakMap,(0,n.Cc)([(0,s.MZ)()],l.prototype,"dir",2),(0,n.Cc)([(0,s.MZ)()],l.prototype,"lang",2),(0,n.Cc)([(0,s.MZ)({type:Boolean,reflect:!0,attribute:"did-ssr"})],l.prototype,"didSSR",2),i.d(e,{_:()=>l})},1337(t,e,i){i(2053),i(7822),i(4373),i(9675),i(2808),i(6618),i(9866),i(9561),i(501),i(2598),i(7475),i(2272),i(7171),i(4800),i(666)},1657(t,e,i){var r=i(5077),n=(0,r.AH)`
  :host {
    --spacing: var(--wa-space-l);

    /* Internal calculated properties */
    --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

    display: flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-s);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  :host([appearance='outlined']) {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='accent']) {
    color: var(--wa-color-neutral-on-loud);
    background-color: var(--wa-color-neutral-fill-loud);
    border-color: transparent;
  }

  /* Take care of top and bottom radii */
  .media,
  :host(:not([with-media])) .header,
  :host(:not([with-media], [with-header])) .body {
    border-start-start-radius: var(--inner-border-radius);
    border-start-end-radius: var(--inner-border-radius);
  }

  :host(:not([with-footer])) .body,
  .footer {
    border-end-start-radius: var(--inner-border-radius);
    border-end-end-radius: var(--inner-border-radius);
  }

  .media {
    display: flex;
    overflow: hidden;

    &::slotted(*) {
      display: block;
      width: 100%;
      border-radius: 0 !important;
    }
  }

  /* Round all corners for plain appearance */
  :host([appearance='plain']) .media {
    border-radius: var(--inner-border-radius);

    &::slotted(*) {
      border-radius: inherit !important;
    }
  }

  .header {
    display: block;
    border-block-end-style: inherit;
    border-block-end-color: var(--wa-color-surface-border);
    border-block-end-width: var(--wa-panel-border-width);
    padding: calc(var(--spacing) / 2) var(--spacing);
  }

  .body {
    display: block;
    padding: var(--spacing);
  }

  .footer {
    display: block;
    border-block-start-style: inherit;
    border-block-start-color: var(--wa-color-surface-border);
    border-block-start-width: var(--wa-panel-border-width);
    padding: var(--spacing);
  }

  /* Push slots to sides when the action slots renders */
  .has-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :host(:not([with-header])) .header,
  :host(:not([with-footer])) .footer,
  :host(:not([with-media])) .media {
    display: none;
  }

  /* Orientation Styles */
  :host([orientation='horizontal']) {
    flex-direction: row;

    .media {
      border-start-start-radius: var(--inner-border-radius);
      border-end-start-radius: var(--inner-border-radius);
      border-start-end-radius: 0;

      &::slotted(*) {
        block-size: 100%;
        inline-size: 100%;
        object-fit: cover;
      }
    }
  }

  :host([orientation='horizontal']) .body slot::slotted(*) {
    display: block;
    height: 100%;
    margin: 0;
  }

  :host([orientation='horizontal']) slot[name='actions']::slotted(*) {
    display: flex;
    align-items: center;
    padding: var(--spacing);
  }
`,o=i(6277),s=i(2808),a=i(2598),l=i(666),h=i(1588),d=i(9898),c=class extends a._{constructor(){super(...arguments),this.hasSlotController=new o.X(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.withHeaderActions=!1,this.withFooterActions=!1,this.orientation="vertical"}willUpdate(t){this.withHeader=this.hasSlotController.test("header","withHeader"),this.withMedia=this.hasSlotController.test("media","withMedia"),this.withFooter=this.hasSlotController.test("footer","withFooter"),super.willUpdate(t)}render(){if("horizontal"===this.orientation)return(0,r.qy)`
        <slot name="media" part="media" class="media"></slot>
        <div part="body" class="body"><slot></slot></div>
        <slot name="actions" part="actions" class="actions"></slot>
      `;let t=this.hasSlotController.test("header-actions","withHeaderActions"),e=this.hasSlotController.test("footer-actions","withFooterActions");return(0,r.qy)`
      <slot name="media" part="media" class="media"></slot>

      <header
        part="header"
        class=${(0,d.H)({header:!0,"has-actions":t})}
      >
        <slot name="header"></slot>
        <slot name="header-actions"></slot>
      </header>

      <div part="body" class="body"><slot></slot></div>

      <footer
        part="footer"
        class=${(0,d.H)({footer:!0,"has-actions":e})}
      >
        <slot name="footer"></slot>
        <slot name="footer-actions"></slot>
      </footer>
    `}};c.css=[s.J,n],(0,l.Cc)([(0,h.MZ)({reflect:!0})],c.prototype,"appearance",2),(0,l.Cc)([(0,h.MZ)({attribute:"with-header",type:Boolean,reflect:!0})],c.prototype,"withHeader",2),(0,l.Cc)([(0,h.MZ)({attribute:"with-media",type:Boolean,reflect:!0})],c.prototype,"withMedia",2),(0,l.Cc)([(0,h.MZ)({attribute:"with-footer",type:Boolean,reflect:!0})],c.prototype,"withFooter",2),(0,l.Cc)([(0,h.MZ)({attribute:"with-header-actions",type:Boolean,reflect:!0})],c.prototype,"withHeaderActions",2),(0,l.Cc)([(0,h.MZ)({attribute:"with-footer-actions",type:Boolean,reflect:!0})],c.prototype,"withFooterActions",2),(0,l.Cc)([(0,h.MZ)({reflect:!0})],c.prototype,"orientation",2),c=(0,l.Cc)([(0,h.EM)("wa-card")],c),c.disableWarning?.("change-in-update")},3659(t,e,i){i(9561),i(501),i(2598),i(7171),i(4800),i(666)},8610(t,e,i){var r=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}},n=i(5077),o=(0,n.AH)`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`,s=(0,n.AH)`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`,a=i(8212),l=i(9675),h=i(1679),d=i(6277),c=i(2808),u=i(9218),g=i(7475),p=i(666),m=i(1588),f=i(9898),v=i(7288),_=i(2974),w=class extends l.q{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new d.X(this,"hint","label"),this.localize=new g.c(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return n.S$?[]:[...super.validators,(0,a.i)()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){null==t?this.setValue("",null):super.updateFormValue(t)}handleSizeChange(){(0,h.b)(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new r),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){var e;let i;e=this,i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey,"Enter"!==t.key||i||setTimeout(()=>{t.defaultPrevented||t.isComposing||function(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;let i=[...e.elements];if(1===i.length)return e.requestSubmit(null);let r=i.find(t=>"submit"===t.type&&!t.matches(":disabled"));r&&(["input","button"].includes(r.localName)?e.requestSubmit(r):r.click())}(e)})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),(t.has("value")||t.has("defaultValue")||t.has("type"))&&(this.input&&["number","date","time","datetime-local"].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,r="preserve"){let n=e??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(t,n,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=!!this.label||!!t,r=!!this.hint||!!e,o=this.withClear&&!this.disabled&&!this.readonly,s=(!this.didSSR||this.hasUpdated)&&o&&("number"==typeof this.value||this.value&&this.value.length>0);return(0,n.qy)`
      <label
        part="form-control-label label"
        class=${(0,f.H)({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${"password"===this.type&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${(0,v.J)(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${(0,v.J)(this.placeholder)}
          minlength=${(0,v.J)(this.minlength)}
          maxlength=${(0,v.J)(this.maxlength)}
          min=${(0,v.J)(this.min)}
          max=${(0,v.J)(this.max)}
          step=${(0,v.J)(this.step)}
          .value=${(0,_.V)(this.value??"")}
          autocapitalize=${(0,v.J)(this.autocapitalize)}
          autocomplete=${(0,v.J)(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${(0,v.J)(this.pattern)}
          enterkeyhint=${(0,v.J)(this.enterkeyhint)}
          inputmode=${(0,v.J)(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${s?(0,n.qy)`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?(0,n.qy)`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${!this.passwordVisible?(0,n.qy)`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:(0,n.qy)`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${(0,f.H)({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};w.css=[c.J,s,o],w.shadowRootOptions={...l.q.shadowRootOptions,delegatesFocus:!0},(0,p.Cc)([(0,m.P)("input")],w.prototype,"input",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"title",2),(0,p.Cc)([(0,m.MZ)({reflect:!0})],w.prototype,"type",2),(0,p.Cc)([(0,m.wk)()],w.prototype,"value",1),(0,p.Cc)([(0,m.MZ)({attribute:"value",reflect:!0})],w.prototype,"defaultValue",2),(0,p.Cc)([(0,m.MZ)({reflect:!0})],w.prototype,"size",2),(0,p.Cc)([(0,u.w)("size")],w.prototype,"handleSizeChange",1),(0,p.Cc)([(0,m.MZ)({reflect:!0})],w.prototype,"appearance",2),(0,p.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],w.prototype,"pill",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"label",2),(0,p.Cc)([(0,m.MZ)({attribute:"hint"})],w.prototype,"hint",2),(0,p.Cc)([(0,m.MZ)({attribute:"with-clear",type:Boolean})],w.prototype,"withClear",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"placeholder",2),(0,p.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],w.prototype,"readonly",2),(0,p.Cc)([(0,m.MZ)({attribute:"password-toggle",type:Boolean})],w.prototype,"passwordToggle",2),(0,p.Cc)([(0,m.MZ)({attribute:"password-visible",type:Boolean})],w.prototype,"passwordVisible",2),(0,p.Cc)([(0,m.MZ)({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],w.prototype,"withoutSpinButtons",2),(0,p.Cc)([(0,m.MZ)({type:Boolean,reflect:!0})],w.prototype,"required",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"pattern",2),(0,p.Cc)([(0,m.MZ)({type:Number})],w.prototype,"minlength",2),(0,p.Cc)([(0,m.MZ)({type:Number})],w.prototype,"maxlength",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"min",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"max",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"step",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"autocapitalize",2),(0,p.Cc)([(0,m.MZ)({type:Boolean,converter:{fromAttribute:t=>!!t&&"off"!==t,toAttribute:t=>t?"on":"off"}})],w.prototype,"autocorrect",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"autocomplete",2),(0,p.Cc)([(0,m.MZ)({type:Boolean})],w.prototype,"autofocus",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"enterkeyhint",2),(0,p.Cc)([(0,m.MZ)({type:Boolean,converter:{fromAttribute:t=>!!t&&"false"!==t,toAttribute:t=>t?"true":"false"}})],w.prototype,"spellcheck",2),(0,p.Cc)([(0,m.MZ)()],w.prototype,"inputmode",2),(0,p.Cc)([(0,m.MZ)({attribute:"with-label",type:Boolean})],w.prototype,"withLabel",2),(0,p.Cc)([(0,m.MZ)({attribute:"with-hint",type:Boolean})],w.prototype,"withHint",2),(0,p.Cc)([(0,u.w)("step",{waitUntilFirstUpdate:!0})],w.prototype,"handleStepChange",1),w=(0,p.Cc)([(0,m.EM)("wa-input")],w),w.disableWarning?.("change-in-update"),i(9561),i(501),i(2598),i(2272),i(7171),i(4800)},3707(t,e,i){var r=i(5077),n=(0,r.AH)`
  :host {
    display: block;
    background-color: var(--wa-color-surface-default);
    box-sizing: border-box;
    min-height: 100%;
    --menu-width: auto;
    --main-width: 1fr;
    --aside-width: auto;
    --banner-height: 0px;
    --header-height: 0px;
    --subheader-height: 0px;
    --scroll-margin-top: calc(var(--header-height, 0px) + var(--subheader-height, 0px) + 0.5em);

    --banner-top: var(--banner-height);
    --header-top: var(--header-height);
    --subheader-top: var(--subheader-height);
  }

  slot[name]:not([name='skip-to-content'], [name='navigation-toggle'])::slotted(*) {
    display: flex;
    background-color: var(--wa-color-surface-default);
  }

  ::slotted([slot='banner']) {
    align-items: center;
    justify-content: center;
    gap: var(--wa-space-m);
    padding: var(--wa-space-xs) var(--wa-space-m);
  }

  ::slotted([slot='header']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m);
    flex: auto;
  }

  ::slotted([slot='subheader']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-xs) var(--wa-space-m);
  }

  ::slotted([slot*='navigation']),
  ::slotted([slot='menu']),
  ::slotted([slot='aside']) {
    flex-direction: column;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m);
  }

  ::slotted([slot='main-header']) {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-m) var(--wa-space-3xl);
  }

  slot:not([name]) {
    /* See #331 */
    &::slotted(main),
    &::slotted(section) {
      padding: var(--wa-space-3xl);
    }
  }

  ::slotted([slot='main-footer']),
  ::slotted([slot='footer']) {
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--wa-space-m);
    padding: var(--wa-space-3xl);
  }

  :host([disable-sticky~='banner']) {
    --banner-top: 0px;
  }
  :host([disable-sticky~='header']) {
    --header-top: 0px;
  }
  :host([disable-sticky~='subheader']) {
    --subheader-top: 0px;
  }

  /* Nothing else depends on subheader-height. */
  :host([disable-sticky~='subheader']) {
  }
  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    height: unset;
    max-height: unset;
  }

  :host([disable-sticky~='banner']) [part~='banner'],
  :host([disable-sticky~='header']) [part~='header'],
  :host([disable-sticky~='subheader']) [part~='subheader'],
  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    position: static;
    overflow: unset;
    z-index: unset;
  }

  :host([disable-sticky~='aside']) [part~='aside'],
  :host([disable-sticky~='menu']) [part~='menu'] {
    height: auto;
    max-height: auto;
  }

  [part~='base'] {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: repeat(3, minmax(0, auto)) minmax(0, 1fr) minmax(0, auto);
    grid-template-columns: 100%;
    width: 100%;
    grid-template-areas:
      'banner'
      'header'
      'subheader'
      'body'
      'footer';
  }

  /* Grid areas */
  [part~='banner'] {
    grid-area: banner;
  }
  [part~='header'] {
    grid-area: header;
  }
  [part~='subheader'] {
    grid-area: subheader;
  }
  [part~='menu'] {
    grid-area: menu;
  }
  [part~='body'] {
    grid-area: body;
  }
  [part~='main'] {
    grid-area: main;
  }
  [part~='aside'] {
    grid-area: aside;
  }
  [part~='footer'] {
    grid-area: footer;
  }

  /* Z-indexes */
  [part~='banner'],
  [part~='header'],
  [part~='subheader'] {
    position: sticky;
    z-index: 5;
  }
  [part~='banner'] {
    top: 0px;
  }
  [part~='header'] {
    top: var(--banner-top);

    /** Make the header flex so that you don't unexpectedly have the default toggle button appearing above a slotted div because block elements are fun. */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  [part~='subheader'] {
    top: calc(var(--header-top) + var(--banner-top));
  }
  [part~='body'] {
    display: grid;
    min-height: 100%;
    align-items: flex-start;
    grid-template-columns: minmax(0, var(--menu-width)) minmax(0, var(--main-width)) minmax(0, var(--aside-width));
    grid-template-rows: minmax(0, 1fr);
    grid-template-areas: 'menu main aside';
  }
  [part~='main'] {
    display: grid;
    min-height: 100%;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
    grid-template-areas:
      'main-header'
      'main-content'
      'main-footer';
  }
  [part~='main-header'] {
    grid-area: main-header;
  }
  [part~='main-content'] {
    grid-area: main-content;
  }
  [part~='main-footer'] {
    grid-area: main-footer;
  }

  .skip-to-content {
    position: absolute;
    top: var(--wa-space-m);
    left: var(--wa-space-m);
    z-index: 6;
    border-radius: var(--wa-corners-1x);
    background-color: var(--wa-color-surface-default);
    color: var(--wa-color-text-link);
    text-decoration: none;
    padding: var(--wa-space-s) var(--wa-space-m);
    box-shadow: var(--wa-shadow-l);
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  [part~='menu'],
  [part~='aside'] {
    position: sticky;
    top: calc(var(--banner-top) + var(--header-top) + var(--subheader-top));
    z-index: 4;
    height: min(
      var(--main-height, 100dvh),
      calc(100dvh - var(--header-top) - var(--banner-top) - var(--subheader-top))
    );
    max-height: min(
      var(--main-height, 100dvh),
      calc(100dvh - var(--header-top) - var(--banner-top) - var(--subheader-top))
    );
    overflow: auto;
  }

  [part~='navigation'] {
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  }

  [part~='drawer']::part(dialog) {
    background-color: var(--wa-color-surface-default);
  }

  /* Set these on the slot because we don't always control the navigation-toggle since that may be slotted. */
  slot[name~='navigation-toggle'],
  :host([disable-navigation-toggle]) slot[name~='navigation-toggle'] {
    display: none;
  }

  /* Sometimes the media query in the viewport is stubborn in iframes. This is an extra check to make it behave properly. */
  :host(:not([disable-navigation-toggle])[view='mobile']) slot[name~='navigation-toggle'] {
    display: contents;
  }

  [part~='navigation-toggle'] {
    /* Use only a margin-inline-start because the slotted header is expected to have default padding
        so it looks really awkward if this sets a margin-inline-end and the slotted header has a padding-inline-start. */
    margin-inline-start: var(--wa-space-m);
  }
`,o=(0,r.AH)`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,s=i(2598),a=i(666),l=i(1588),h=i(2974),d=i(496),c=i(3356);class u extends c.WL{constructor(t){if(super(t),this.it=d.s6,t.type!==c.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d.s6||null==t)return this._t=void 0,this.it=t;if(t===d.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}u.directiveName="unsafeHTML",u.resultType=1;let g=(0,c.u$)(u);var p=class extends s._{constructor(){super(),this.headerResizeObserver=r.S$?null:this.slotResizeObserver("header"),this.subheaderResizeObserver=r.S$?null:this.slotResizeObserver("subheader"),this.bannerResizeObserver=r.S$?null:this.slotResizeObserver("banner"),this.footerResizeObserver=r.S$?null:this.slotResizeObserver("footer"),this.handleNavigationToggle=t=>{if("desktop"===this.view)return void this.hideNavigation();let e=t.composedPath(),i=this.navigationToggleSlot;e.find(t=>t.hasAttribute?.("data-toggle-nav")||t.assignedSlot===i||t===i)&&(t.preventDefault(),this.toggleNavigation())},this.view="desktop",this.navOpen=!1,this.mobileBreakpoint="768px",this.navigationPlacement="start",this.disableNavigationToggle=!1,this.pageResizeObserver="u">typeof ResizeObserver?new ResizeObserver(t=>{requestAnimationFrame(()=>{for(let e of t)if(e.contentBoxSize){let t=e.borderBoxSize[0].inlineSize,i=this.view;t>=function(t,e=document.documentElement){if(!Number.isNaN(Number(t)))return Number(t);if(!window.CSS||!CSS.registerProperty)return"string"==typeof t&&t.endsWith("px")?parseFloat(t):Number(t)||0;let i="--wa-length-resolver";if(!CSS.registerProperty.toString().includes(i))try{CSS.registerProperty({name:i,syntax:"<length>",inherits:!1,initialValue:"0px"})}catch(t){}let r=e.style.getPropertyValue(i);e.style.setProperty(i,t);let n=getComputedStyle(e)?.getPropertyValue(i);return(e.style.setProperty(i,r),n?.endsWith("px"))?parseFloat(n):Number(n)||0}(this.mobileBreakpoint)?this.view="desktop":this.view="mobile",this.requestUpdate("view",i)}t.length>0&&this.updateAsideAndMenuHeights()})}):null,this.updateNavigationToggleState=t=>{if(t&&!["navigation","navigation-header","navigation-footer"].includes(t.target.name))return;let e=!!this.querySelector(":not([slot='toggle-navigation']) [data-toggle-nav]"),i=!!this.querySelector('[slot="navigation"]')||!!this.querySelector('[slot="navigation-header"]')||!!this.querySelector('[slot="navigation-footer"]');this.disableNavigationToggle=e||!i},this.updateAsideAndMenuHeights=()=>{let t=this.visiblePixelsInViewport(this.main);null!=t&&(this.aside.style.setProperty("--main-height",`${Math.round(t)}px`),this.menu.style.setProperty("--main-height",`${Math.round(t)}px`))},r.S$||this.addEventListener("click",this.handleNavigationToggle)}slotResizeObserver(t){return new ResizeObserver(e=>{requestAnimationFrame(()=>{for(let i of e)if(i.contentBoxSize){let e=i.borderBoxSize[0];this.style.setProperty(`--${t}-height`,`${Math.round(e.blockSize)}px`)}})})}updated(t){t.has("view")&&this.hideNavigation(),super.updated(t)}connectedCallback(){super.connectedCallback(),r.S$||setTimeout(()=>{document.addEventListener("scroll",this.updateAsideAndMenuHeights,{passive:!0}),requestAnimationFrame(()=>{this.updateAsideAndMenuHeights(),this.pageResizeObserver?.observe(this),this.headerResizeObserver?.observe(this.header),this.subheaderResizeObserver?.observe(this.subheader),this.bannerResizeObserver?.observe(this.banner),this.footerResizeObserver?.observe(this.footer)})})}visiblePixelsInViewport(t){if(!t)return null;let e=t.clientHeight,i=window.innerHeight,r=t.getBoundingClientRect?.();if(!r)return null;let{top:n,bottom:o}=r;return Math.max(0,n>0?Math.min(e,i-n):Math.min(o,i))}firstUpdated(){if(!document.getElementById("main-content")){let t=document.createElement("div");t.id="main-content",t.slot="skip-to-content-target",this.prepend(t)}this.shadowRoot.addEventListener("slotchange",this.updateNavigationToggleState),this.updateNavigationToggleState()}disconnectedCallback(){super.disconnectedCallback(),this.pageResizeObserver?.unobserve(this),this.headerResizeObserver?.unobserve(this.header),this.subheaderResizeObserver?.unobserve(this.subheader),this.footerResizeObserver?.unobserve(this.footer),this.bannerResizeObserver?.unobserve(this.banner),document.removeEventListener("scroll",this.updateAsideAndMenuHeights)}showNavigation(){this.navOpen=!0}hideNavigation(){this.navOpen=!1}toggleNavigation(){this.navOpen=!this.navOpen}render(){var t;return(0,r.qy)`
      <a href="#main-content" part="skip-to-content" class="wa-visually-hidden">
        <slot name="skip-to-content">Skip to content</slot>
      </a>

      <!-- unsafeHTML needed for SSR until this is solved: https://github.com/lit/lit/issues/4696 -->
      ${g(`
        <style id="mobile-styles">
          ${((t="768px")=>`
  @media screen and (width < ${t}) {
    [part~='navigation'] {
      display: none;
    }

    :host(:not([disable-navigation-toggle])) slot[name~='navigation-toggle'] {
      display: contents;
    }
  }
`)(Number.isNaN(Number(t=this.mobileBreakpoint))?t:`${t}px`)}
        </style>
      `)}

      <div class="base" part="base">
        <div class="banner" part="banner">
          <slot name="banner"></slot>
        </div>
        <div class="header" part="header">
          <slot name="navigation-toggle">
            <wa-button part="navigation-toggle" size="s" appearance="plain" variant="neutral">
              <slot name="navigation-toggle-icon">
                <wa-icon name="bars" part="navigation-toggle-icon" label="Toggle navigation drawer"></wa-icon>
              </slot>
            </wa-button>
          </slot>
          <slot name="header"></slot>
        </div>
        <div class="subheader" part="subheader">
          <slot name="subheader"></slot>
        </div>
        <div class="body" part="body">
          <div class="menu" part="menu">
            <slot name="menu">
              <nav name="navigation" class="navigation" part="navigation navigation-desktop">
                <!-- Add fallback divs so that CSS grid works properly. -->
                <slot name="desktop-navigation-header">
                  <slot name=${"desktop"===this.view?"navigation-header":"___"}><div></div></slot>
                </slot>
                <slot name="desktop-navigation">
                  <slot name=${"desktop"===this.view?"navigation":"____"}><div></div></slot>
                </slot>
                <slot name="desktop-navigation-footer">
                  <slot name=${"desktop"===this.view?"navigation-footer":"___"}><div></div></slot>
                </slot>
              </nav>
            </slot>
          </div>
          <div class="main" part="main">
            <div class="main-header" part="main-header">
              <slot name="main-header"></slot>
            </div>
            <div class="main-content" part="main-content">
              <slot name="skip-to-content-target"></slot>
              <slot></slot>
            </div>
            <div class="main-footer" part="main-footer">
              <slot name="main-footer"></slot>
            </div>
          </div>
          <div class="aside" part="aside">
            <slot name="aside"></slot>
          </div>
        </div>
        <div class="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
      <wa-drawer
        part="drawer"
        placement=${this.navigationPlacement}
        light-dismiss
        ?open=${(0,h.V)(this.navOpen)}
        @wa-after-show=${()=>this.navOpen=this.navigationDrawer.open}
        @wa-after-hide=${()=>this.navOpen=this.navigationDrawer.open}
        exportparts="
          dialog:drawer__dialog,
          overlay:drawer__overlay,
          panel:drawer__panel,
          header:drawer__header,
          header-actions:drawer__header-actions,
          title:drawer__title,
          close-button:drawer__close-button,
          close-button__base:drawer__close-button__base,
          body:drawer__body,
          footer:drawer__footer
        "
        class="navigation-drawer"
      >
        <slot slot="label" part="navigation-header" name="mobile-navigation-header">
          <slot name=${"mobile"===this.view?"navigation-header":"___"}></slot>
        </slot>
        <slot name="mobile-navigation">
          <slot name=${"mobile"===this.view?"navigation":"____"}></slot>
        </slot>

        <slot slot="footer" name="mobile-navigation-footer">
          <slot part="navigation-footer" name=${"mobile"===this.view?"navigation-footer":"___"}></slot>
        </slot>
      </wa-drawer>
    `}};p.css=[o,n],(0,a.Cc)([(0,l.P)("[part~='header']")],p.prototype,"header",2),(0,a.Cc)([(0,l.P)("[part~='menu']")],p.prototype,"menu",2),(0,a.Cc)([(0,l.P)("[part~='main']")],p.prototype,"main",2),(0,a.Cc)([(0,l.P)("[part~='aside']")],p.prototype,"aside",2),(0,a.Cc)([(0,l.P)("[part~='subheader']")],p.prototype,"subheader",2),(0,a.Cc)([(0,l.P)("[part~='footer']")],p.prototype,"footer",2),(0,a.Cc)([(0,l.P)("[part~='banner']")],p.prototype,"banner",2),(0,a.Cc)([(0,l.P)("[part~='drawer']")],p.prototype,"navigationDrawer",2),(0,a.Cc)([(0,l.P)("slot[name~='navigation-toggle']")],p.prototype,"navigationToggleSlot",2),(0,a.Cc)([(0,l.MZ)({attribute:"view",reflect:!0})],p.prototype,"view",2),(0,a.Cc)([(0,l.MZ)({attribute:"nav-open",reflect:!0,type:Boolean})],p.prototype,"navOpen",2),(0,a.Cc)([(0,l.MZ)({attribute:"mobile-breakpoint",type:String})],p.prototype,"mobileBreakpoint",2),(0,a.Cc)([(0,l.MZ)({attribute:"navigation-placement",reflect:!0})],p.prototype,"navigationPlacement",2),(0,a.Cc)([(0,l.MZ)({attribute:"disable-navigation-toggle",reflect:!0,type:Boolean})],p.prototype,"disableNavigationToggle",2),p=(0,a.Cc)([(0,l.EM)("wa-page")],p);var m=(0,r.AH)`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
        NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
        remove the fallback values here.
      */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`,f=new Set;function v(t){if(f.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){let t,e,i=(t=document.documentElement.clientWidth,Math.abs(window.innerWidth-t)+(isNaN(e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,"")))||!e?0:e)),r=getComputedStyle(document.documentElement).scrollbarGutter;r&&"auto"!==r||(r="stable"),i<2&&(r=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",r),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${i}px`)}}function _(t){f.delete(t),0===f.size&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}var w=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}},y=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},b=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},C=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},x=[];function E(t){return x.length>0&&x[x.length-1]===t}var A=i(6277);function L(t,e){return new Promise(i=>{let r=new AbortController,{signal:n}=r;if(t.classList.contains(e))return;t.classList.add(e);let o=!1,s=()=>{o||(o=!0,t.classList.remove(e),i(),r.abort())};t.addEventListener("animationend",s,{once:!0,signal:n}),t.addEventListener("animationcancel",s,{once:!0,signal:n}),requestAnimationFrame(()=>{o||0!==t.getAnimations().length||s()})})}var M=i(9218),R=i(7475),S=i(9898),T=class extends s._{constructor(){super(...arguments),this.localize=new R.c(this),this.hasSlotController=new A.X(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.open&&E(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){!r.S$&&this.open&&(this.addOpenListeners(),this.drawer.showModal(),v(this))}disconnectedCallback(){super.disconnectedCallback(),_(this),this.removeOpenListeners()}async requestClose(t){let e=new y({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,L(this.drawer,"pulse");return}this.removeOpenListeners(),await L(this.drawer,"hide"),this.open=!1,this.drawer.close(),_(this);let i=this.originalTrigger;"function"==typeof i?.focus&&setTimeout(()=>i.focus()),this.dispatchEvent(new b)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),x.push(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown);for(let t=x.length-1;t>=0;t--)if(x[t]===this){x.splice(t,1);break}}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&E(this)&&this.requestClose(this.drawer)}handleDialogClick(t){let e=t.target.closest('[data-drawer="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await L(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){let t=new w;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),v(this),requestAnimationFrame(()=>{let t=this.querySelector("[autofocus]");t&&"function"==typeof t.focus?t.focus():this.drawer.focus()}),await L(this.drawer,"show"),this.dispatchEvent(new C)}render(){let t=!this.withoutHeader,e=this.hasSlotController.test("footer","withFooter");return(0,r.qy)`
      <dialog
        part="dialog"
        class=${(0,S.H)({drawer:!0,open:this.open,top:"top"===this.placement,end:"end"===this.placement,bottom:"bottom"===this.placement,start:"start"===this.placement})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?(0,r.qy)`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${t=>this.requestClose(t.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <footer part="footer" class="footer" ?hidden=${!e}>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    `}};T.css=m,(0,a.Cc)([(0,l.P)(".drawer")],T.prototype,"drawer",2),(0,a.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],T.prototype,"open",2),(0,a.Cc)([(0,l.MZ)({reflect:!0})],T.prototype,"label",2),(0,a.Cc)([(0,l.MZ)({reflect:!0})],T.prototype,"placement",2),(0,a.Cc)([(0,l.MZ)({attribute:"without-header",type:Boolean,reflect:!0})],T.prototype,"withoutHeader",2),(0,a.Cc)([(0,l.MZ)({attribute:"light-dismiss",type:Boolean})],T.prototype,"lightDismiss",2),(0,a.Cc)([(0,l.MZ)({attribute:"with-footer",type:Boolean})],T.prototype,"withFooter",2),(0,a.Cc)([(0,M.w)("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1),T=(0,a.Cc)([(0,l.EM)("wa-drawer")],T),r.S$||(document.addEventListener("click",t=>{let e=t.target.closest("[data-drawer]");if(e instanceof Element){let[t,i]=(e.getAttribute("data-drawer")||"").split(" ").map(t=>t.trim()).filter(t=>""!==t);if("open"===t&&i?.length){let t=e.getRootNode().getElementById(i);t?.localName==="wa-drawer"?t.open=!0:console.warn(`A drawer with an ID of "${i}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{})),i(2053),i(7822),i(4373),i(9675),i(2808),i(6618),i(9866),i(9561),i(501),i(2272),i(7171),i(4800)},7163(t,e,i){var r=i(3335);i(666),i.d(e,{jP:()=>r.jP})},1292(t,e,i){i.d(e,{mN:()=>x,AH:()=>l,W3:()=>y,Ec:()=>b});let r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}let l=(t,...e)=>new a(1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,o),h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e,i="";for(let e of t.cssRules)i+=e.cssText;return new a("string"==typeof(e=i)?e:e+"",void 0,o)})(t):t,{is:d,defineProperty:c,getOwnPropertyDescriptor:u,getOwnPropertyNames:g,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,f=globalThis,v=f.trustedTypes,_=v?v.emptyScript:"",w=f.reactiveElementPolyfillSupport,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!d(t,e),C={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){let{get:r,set:n}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){let o=r?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??C}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...g(t),...p(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(h(i));else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(n)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),n=r.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=r;let o=n.fromAttribute(e,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,e,i,r=!1,n){if(void 0!==t){let o=this.constructor;if(!1===r&&(n=this[t]),!(((i??=o.getPropertyOptions(t)).hasChanged??b)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t){let{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x.elementProperties=new Map,x.finalized=new Map,w?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2")},9298(t,e,i){let r,n=new Set,o=new Map,s="ltr",a="en",l="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(l){let t=new MutationObserver(d);s=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function h(...t){t.map(t=>{let e=t.$code.toLowerCase();o.has(e)?o.set(e,Object.assign(Object.assign({},o.get(e)),t)):o.set(e,t),r||(r=t)}),d()}function d(){l&&(s=document.documentElement.dir||"ltr",a=document.documentElement.lang||navigator.language),[...n.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}class c{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){n.add(this.host)}hostDisconnected(){n.delete(this.host)}dir(){return`${this.host.dir||s}`.toLowerCase()}lang(){return`${this.host.lang||a}`.toLowerCase()}getTranslationData(t){var e,i;let r;try{r=new Intl.Locale(t.replace(/_/g,"-"))}catch(t){return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let n=r.language.toLowerCase(),s=null!=(i=null==(e=r.region)?void 0:e.toLowerCase())?i:"",a=o.get(`${n}-${s}`),l=o.get(n);return{locale:r,language:n,region:s,primary:a,secondary:l}}exists(t,e){var i;let{primary:n,secondary:o}=this.getTranslationData(null!=(i=e.lang)?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!n&&!!n[t]||!!o&&!!o[t]||!!e.includeFallback&&!!r&&!!r[t]}term(t,...e){let i,{primary:n,secondary:o}=this.getTranslationData(this.lang());if(n&&n[t])i=n[t];else if(o&&o[t])i=o[t];else{if(!r||!r[t])return console.error(`No translation found for: ${String(t)}`),String(t);i=r[t]}return"function"==typeof i?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}i.d(e,{XC:()=>h,c2:()=>c})},8632(t,e,i){let{I:r}=i(496).ge,n={};i.d(e,{},{Rt:t=>void 0===t.strings,mY:(t,e=n)=>t._$AH=e,qb:(t,e)=>void 0===e?void 0!==t?._$litType$:t?._$litType$===e})},3356(t,e,i){class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}i.d(e,{WL:()=>r},{OA:{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},u$:t=>(...e)=>({_$litDirective$:t,values:e})})},496(t,e,i){let r=globalThis,n=t=>t,o=r.trustedTypes,s=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",l=`lit$${Math.random().toFixed(9).slice(2)}$`,h="?"+l,d=`<${h}>`,c=document,u=()=>c.createComment(""),g=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,m=t=>p(t)||"function"==typeof t?.[Symbol.iterator],f="[ 	\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,w=/>/g,y=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,C=/"/g,x=/^(?:script|style|textarea|title)$/i,E=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),A=E(1),L=E(2),M=E(3),R=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),T=new WeakMap,I=c.createTreeWalker(c,129);function P(t,e){if(!p(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}let O=(t,e)=>{let i=t.length-1,r=[],n,o=2===e?"<svg>":3===e?"<math>":"",s=v;for(let e=0;e<i;e++){let i=t[e],h,c,u=-1,g=0;for(;g<i.length&&(s.lastIndex=g,null!==(c=s.exec(i)));)g=s.lastIndex,s===v?"!--"===c[1]?s=_:void 0!==c[1]?s=w:void 0!==c[2]?(x.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=y):void 0!==c[3]&&(s=y):s===y?">"===c[0]?(s=n??v,u=-1):void 0===c[1]?u=-2:(u=s.lastIndex-c[2].length,h=c[1],s=void 0===c[3]?y:'"'===c[3]?C:b):s===C||s===b?s=y:s===_||s===w?s=v:(s=y,n=void 0);let p=s===y&&t[e+1].startsWith("/>")?" ":"";o+=s===v?i+d:u>=0?(r.push(h),i.slice(0,u)+a+i.slice(u)+l+p):i+l+(-2===u?e:p)}return[P(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class k{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const d=t.length-1,c=this.parts,[g,p]=O(t,e);if(this.el=k.createElement(g,i),I.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=I.nextNode())&&c.length<d;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(a)){const e=p[s++],i=r.getAttribute(t).split(l),o=/([.?@])?(.*)/.exec(e);c.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?N:"?"===o[1]?B:"@"===o[1]?V:$}),r.removeAttribute(t)}else t.startsWith(l)&&(c.push({type:6,index:n}),r.removeAttribute(t));if(x.test(r.tagName)){const t=r.textContent.split(l),e=t.length-1;if(e>0){r.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],u()),I.nextNode(),c.push({type:2,index:++n});r.append(t[e],u())}}}else if(8===r.nodeType)if(r.data===h)c.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(l,t+1));)c.push({type:7,index:n}),t+=l.length-1}n++}}static createElement(t,e){let i=c.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,r){if(e===R)return e;let n=void 0!==r?i._$Co?.[r]:i._$Cl,o=g(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t))._$AT(t,i,r),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(e=z(t,n._$AS(t,e.values),n,r)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??c).importNode(e,!0);I.currentNode=r;let n=I.nextNode(),o=0,s=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new D(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new q(n,this,t)),this._$AV.push(e),a=i[++s]}o!==a?.index&&(n=I.nextNode(),o++)}return I.currentNode=c,r}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){g(t=z(this,t,e))?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):m(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&g(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=k.createElement(P(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{let t=new F(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new k(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,r=0;for(let n of t)r===e.length?e.push(i=new D(this.O(u()),this.O(u()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let e=n(t).nextSibling;n(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ${get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(t,e=this,i,r){let n=this.strings,o=!1;if(void 0===n)(o=!g(t=z(this,t,e,0))||t!==this._$AH&&t!==R)&&(this._$AH=t);else{let r,s,a=t;for(t=n[0],r=0;r<n.length-1;r++)(s=z(this,a[i+r],e,r))===R&&(s=this._$AH[r]),o||=!g(s)||s!==this._$AH[r],s===S?t=S:t!==S&&(t+=(s??"")+n[r+1]),this._$AH[r]=s}o&&!r&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class N extends ${constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class B extends ${constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class V extends ${constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=z(this,t,e,0)??S)===R)return;let i=this._$AH,r=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==S&&(i===S||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}let K=r.litHtmlPolyfillSupport;K?.(k,D),(r.litHtmlVersions??=[]).push("3.3.3"),i.d(e,{},{JW:L,XX:(t,e,i)=>{let r=i?.renderBefore??e,n=r._$litPart$;if(void 0===n){let t=i?.renderBefore??null;r._$litPart$=n=new D(e.insertBefore(u(),t),t,void 0,i??{})}return n._$AI(t),n},c0:R,ej:M,ge:{M:a,P:l,A:h,C:1,L:O,R:F,D:m,V:z,I:D,H:$,N:B,U:V,B:N,F:q},qy:A,s6:S})},1588(t,e,i){i.d(e,{EM:()=>r,MZ:()=>s,P:()=>h,wk:()=>a});let r=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var n=i(1292);let o={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec};function s(t){return(e,i)=>{let r;return"object"==typeof i?((t=o,e,i)=>{let{kind:r,metadata:n}=i,s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===r){let{name:r}=i;return{set(i){let n=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,n,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){let{name:r}=i;return function(i){let n=this[r];e.call(this,i),this.requestUpdate(r,n,t,!0,i)}}throw Error("Unsupported decorator location: "+r)})(t,e,i):(r=e.hasOwnProperty(i),e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0)}}function a(t){return s({...t,state:!0,attribute:!1})}let l=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function h(t,e){return(i,r,n)=>{let o=e=>e.renderRoot?.querySelector(t)??null;if(e){let t,{get:e,set:s}="object"==typeof r?i:n??(t=Symbol(),{get(){return this[t]},set(e){this[t]=e}});return l(i,r,{get(){let t=e.call(this);return void 0===t&&(null!==(t=o(this))||this.hasUpdated)&&s.call(this,t),t}})}return l(i,r,{get(){return o(this)}})}}},9898(t,e,i){i.d(e,{H:()=>o});var r=i(496),n=i(3356);let o=(0,n.u$)(class extends n.WL{constructor(t){if(super(t),t.type!==n.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return r.c0}})},7288(t,e,i){i.d(e,{J:()=>n});var r=i(496);let n=t=>t??r.s6},2974(t,e,i){i.d(e,{V:()=>s});var r=i(496),n=i(3356),o=i(8632);let s=(0,n.u$)(class extends n.WL{constructor(t){if(super(t),t.type!==n.OA.PROPERTY&&t.type!==n.OA.ATTRIBUTE&&t.type!==n.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.Rt)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===r.c0||e===r.s6)return e;let i=t.element,s=t.name;if(t.type===n.OA.PROPERTY){if(e===i[s])return r.c0}else if(t.type===n.OA.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return r.c0}else if(t.type===n.OA.ATTRIBUTE&&i.getAttribute(s)===e+"")return r.c0;return(0,o.mY)(t),e}})},5077(t,e,i){i.d(e,{WF:()=>s,AH:()=>r.AH,qy:()=>n.qy,S$:()=>!1});var r=i(1292),n=i(496);let o=globalThis;class s extends r.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,n.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.c0}}s._$litElement$=!0,s.finalized=!0,o.litElementHydrateSupport?.({LitElement:s});let a=o.litElementPolyfillSupport;a?.({LitElement:s}),(o.litElementVersions??=[]).push("4.2.2")},6472(t,e,i){i.d(e,{},{A:class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}})},7965(t,e,i){i(3420);var r=i(8291),n=i(1280),o=i(3811),s=(i(3297),i(7664));function a(t,e,i){let o=!0,a=!1,l=!1,h=[(0,r.Jz)(t,n.A.LOAD,function(){l=!0,a||e()})];return t.src&&s.DT?(a=!0,t.decode().then(function(){o&&e()}).catch(function(t){o&&(l?e():i())})):h.push((0,r.Jz)(t,n.A.ERROR,i)),function(){o=!1,h.forEach(r.JH)}}function l(t,e){return e&&(t.src=e),t.src&&s.DT?new Promise((e,i)=>t.decode().then(()=>e(t)).catch(r=>t.complete&&t.width?e(t):i(r))):new Promise((e,i)=>{function r(){o(),e(t)}function n(){o(),i(Error("Image load error"))}function o(){t.removeEventListener("load",r),t.removeEventListener("error",n)}t.addEventListener("load",r),t.addEventListener("error",n)})}o.A,i.d(e,{RA:()=>l,f6:()=>a})},3420(t,e,i){i.d(e,{},{A:{IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}})},9713(t,e,i){var r=i(7965),n=i(6410),o=i(9925),s=i(7344),a=i(7664);class l extends n.A{constructor(t,e,i,r,n,o){super(t,e,o),this.crossOrigin_=r?.crossOrigin,this.referrerPolicy_=r?.referrerPolicy,this.src_=i,this.key=i,this.image_,a.Wl?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,null!==this.crossOrigin_&&(this.image_.crossOrigin=this.crossOrigin_),void 0!==this.referrerPolicy_&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=n}getImage(){return this.image_}setImage(t){this.image_=t,this.state=o.A.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){let t;this.state=o.A.ERROR,this.unlistenImage_(),this.image_=((t=(0,s.Y)(1,1)).fillStyle="rgba(0,0,0,0)",t.fillRect(0,0,1,1),t.canvas),this.changed()}handleImageLoad_(){if(a.Wl)this.state=o.A.LOADED;else{let t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=o.A.LOADED:this.state=o.A.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==o.A.ERROR&&(this.state=o.A.IDLE,this.image_=new Image,null!==this.crossOrigin_&&(this.image_.crossOrigin=this.crossOrigin_),void 0!==this.referrerPolicy_&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==o.A.IDLE&&(this.state=o.A.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=(0,r.f6)(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}}i.d(e,{},{A:l})},4975(t,e,i){i.d(e,{A:()=>iL});let r="remove";var n=i(8933),o=i(7736);let s="length";class a extends o.Ay{constructor(t,e,i){super(t),this.element=e,this.index=i}}class l extends n.A{constructor(t,e){if(super(),this.on,this.once,this.un,e=e||{},this.unique_=!!e.unique,this.array_=t??[],this.unique_)for(let t=1,e=this.array_.length;t<e;++t)this.assertUnique_(this.array_[t],t);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(t){for(let e=0,i=t.length;e<i;++e)this.push(t[e]);return this}forEach(t){let e=this.array_;for(let i=0,r=e.length;i<r;++i)t(e[i],i,e)}getArray(){return this.array_}item(t){return this.array_[t]}getLength(){return this.get(s)}insertAt(t,e){if(t<0||t>this.getLength())throw Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new a("add",e,t))}pop(){return this.removeAt(this.getLength()-1)}push(t){let e=this.getLength();return this.insertAt(e,t),this.getLength()}remove(t){let e=this.array_;for(let i=0,r=e.length;i<r;++i)if(e[i]===t)return this.removeAt(i)}removeAt(t){if(t<0||t>=this.getLength())return;let e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new a(r,e,t)),e}setAt(t,e){if(t>=this.getLength())return void this.insertAt(t,e);if(t<0)throw Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e,t);let i=this.array_[t];this.array_[t]=e,this.dispatchEvent(new a(r,i,t)),this.dispatchEvent(new a("add",e,t))}updateLength_(){this.set(s,this.array_.length)}assertUnique_(t,e){let i=this.array_;for(let r=0,n=i.length;r<n;++r)if(i[r]===t&&r!==e)throw Error("Duplicate item added to a unique collection")}}class h extends o.Ay{constructor(t,e,i){super(t),this.map=e,this.frameState=void 0!==i?i:null}}let d=h,c=class extends d{constructor(t,e,i,r,n,o){super(t,e,n),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=void 0!==r&&r,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(t){this.pixel_=t}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(t){this.coordinate_=t}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}};var u=i(1280);let g={SINGLECLICK:"singleclick",CLICK:u.A.CLICK,DBLCLICK:u.A.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};var p=i(8291),m=i(3811),f=i(7664),v=i(5054);class _ extends m.A{constructor(t,e){super(t),this.map_=t,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=void 0===e?1:e,this.down_=null;const i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=(0,p.KT)(i,v.A.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=(0,p.KT)(i,v.A.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(u.A.TOUCHMOVE,this.boundHandleTouchMove_,!!f.FT&&{passive:!1})}emulateClick_(t){let e=new c(g.CLICK,this.map_,t);this.dispatchEvent(e),void 0!==this.clickTimeoutId_?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,e=new c(g.DBLCLICK,this.map_,t),this.dispatchEvent(e)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;let e=new c(g.SINGLECLICK,this.map_,t);this.dispatchEvent(e)},250)}updateActivePointers_(t){let e=t.pointerId;if(t.type==g.POINTERUP||t.type==g.POINTERCANCEL){for(let i in delete this.trackedTouches_[e],this.trackedTouches_)if(this.trackedTouches_[i].target!==t.target){delete this.trackedTouches_[i];break}}else(t.type==g.POINTERDOWN||t.type==g.POINTERMOVE)&&(this.trackedTouches_[e]=t);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(t){this.updateActivePointers_(t);let e=new c(g.POINTERUP,this.map_,t,void 0,void 0,this.activePointers_);this.dispatchEvent(e),this.emulateClicks_&&!e.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(t)&&this.emulateClick_(this.down_),0===this.activePointers_.length&&(this.dragListenerKeys_.forEach(p.JH),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(t){return 0===t.button}handlePointerDown_(t){this.emulateClicks_=0===this.activePointers_.length,this.updateActivePointers_(t);let e=new c(g.POINTERDOWN,this.map_,t,void 0,void 0,this.activePointers_);if(this.dispatchEvent(e),this.down_=new PointerEvent(t.type,t),Object.defineProperty(this.down_,"target",{writable:!1,value:t.target}),0===this.dragListenerKeys_.length){let t=this.map_.getOwnerDocument();this.dragListenerKeys_.push((0,p.KT)(t,g.POINTERMOVE,this.handlePointerMove_,this),(0,p.KT)(t,g.POINTERUP,this.handlePointerUp_,this),(0,p.KT)(this.element_,g.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==t&&this.dragListenerKeys_.push((0,p.KT)(this.element_.getRootNode(),g.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(t){if(this.isMoving_(t)){this.updateActivePointers_(t),this.dragging_=!0;let e=new c(g.POINTERDRAG,this.map_,t,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(e)}}relayMoveEvent_(t){this.originalPointerMoveEvent_=t;let e=!!(this.down_&&this.isMoving_(t));this.dispatchEvent(new c(g.POINTERMOVE,this.map_,t,e))}handleTouchMove_(t){let e=this.originalPointerMoveEvent_;(!e||e.defaultPrevented)&&("boolean"!=typeof t.cancelable||!0===t.cancelable)&&t.preventDefault()}isMoving_(t){return this.dragging_||Math.abs(t.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(t.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&((0,p.JH)(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(u.A.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&((0,p.JH)(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(p.JH),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}}var w=i(9016);let y="layergroup",b="size",C="target",x="view";var E=i(361),A=i(9925),L=i(4287),M=i(8509);let R=1/0,S=class{constructor(t,e){this.priorityFunction_=t,this.keyFunction_=e,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,(0,M.I)(this.queuedElements_)}dequeue(){let t=this.elements_,e=this.priorities_,i=t[0];1==t.length?(t.length=0,e.length=0):(t[0]=t.pop(),e[0]=e.pop(),this.siftUp_(0));let r=this.keyFunction_(i);return delete this.queuedElements_[r],i}enqueue(t){(0,L.v)(!(this.keyFunction_(t)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");let e=this.priorityFunction_(t);return e!=R&&(this.elements_.push(t),this.priorities_.push(e),this.queuedElements_[this.keyFunction_(t)]=!0,this.siftDown_(0,this.elements_.length-1),!0)}getCount(){return this.elements_.length}getLeftChildIndex_(t){return 2*t+1}getRightChildIndex_(t){return 2*t+2}getParentIndex_(t){return t-1>>1}heapify_(){let t;for(t=(this.elements_.length>>1)-1;t>=0;t--)this.siftUp_(t)}isEmpty(){return 0===this.elements_.length}isKeyQueued(t){return t in this.queuedElements_}isQueued(t){return this.isKeyQueued(this.keyFunction_(t))}siftUp_(t){let e=this.elements_,i=this.priorities_,r=e.length,n=e[t],o=i[t],s=t;for(;t<r>>1;){let n=this.getLeftChildIndex_(t),o=this.getRightChildIndex_(t),s=o<r&&i[o]<i[n]?o:n;e[t]=e[s],i[t]=i[s],t=s}e[t]=n,i[t]=o,this.siftDown_(s,t)}siftDown_(t,e){let i=this.elements_,r=this.priorities_,n=i[e],o=r[e];for(;e>t;){let t=this.getParentIndex_(e);if(r[t]>o)i[e]=i[t],r[e]=r[t],e=t;else break}i[e]=n,r[e]=o}reprioritize(){let t,e,i,r=this.priorityFunction_,n=this.elements_,o=this.priorities_,s=0,a=n.length;for(e=0;e<a;++e)(i=r(t=n[e]))==R?delete this.queuedElements_[this.keyFunction_(t)]:(o[s]=i,n[s++]=t);n.length=s,o.length=s,this.heapify_()}},T=class extends S{constructor(t,e){super(e=>t.apply(null,e),t=>t[0].getKey()),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=e,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(t){let e=super.enqueue(t);return e&&t[0].addEventListener(u.A.CHANGE,this.boundHandleTileChange_),e}getTilesLoading(){return this.tilesLoading_}handleTileChange(t){let e=t.target,i=e.getState();if(i===A.A.LOADED||i===A.A.ERROR||i===A.A.EMPTY){i!==A.A.ERROR&&e.removeEventListener(u.A.CHANGE,this.boundHandleTileChange_);let t=e.getKey();t in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[t],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(t,e){let i=0;for(;this.tilesLoading_<t&&i<e&&this.getCount()>0;){let t=this.dequeue()[0],e=t.getKey();t.getState()!==A.A.IDLE||e in this.tilesLoadingKeys_||(this.tilesLoadingKeys_[e]=!0,++this.tilesLoading_,++i,t.load())}}};var I=i(1688),P=i(4754),O=i(5609),k=i(717),z=i(7967),F=i(2535),D=i(9599),$=i(7259);class N extends $.A{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target});const e=void 0!==t.className?t.className:"ol-rotate",i=void 0!==t.label?t.label:"⇧",r=void 0!==t.compassClassName?t.compassClassName:"ol-compass";this.label_=null,"string"==typeof i?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(r));const n=t.tipLabel?t.tipLabel:"Reset rotation",o=document.createElement("button");o.className=e+"-reset",o.setAttribute("type","button"),o.title=n,o.appendChild(this.label_),o.addEventListener(u.A.CLICK,this.handleClick_.bind(this),!1);const s=e+" "+F.XI+" "+F.$N,a=this.element;a.className=s,a.appendChild(o),this.callResetNorth_=t.resetNorth?t.resetNorth:void 0,this.duration_=void 0!==t.duration?t.duration:250,this.autoHide_=void 0===t.autoHide||t.autoHide,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(F.Si)}handleClick_(t){t.preventDefault(),void 0!==this.callResetNorth_?this.callResetNorth_():this.resetNorth_()}resetNorth_(){let t=this.getMap().getView();if(!t)return;let e=t.getRotation();void 0!==e&&(this.duration_>0&&e%(2*Math.PI)!=0?t.animate({rotation:0,duration:this.duration_,easing:D.vT}):t.setRotation(0))}render(t){let e=t.frameState;if(!e)return;let i=e.viewState.rotation;if(i!=this.rotation_){if(this.autoHide_){let t=this.element.classList.contains(F.Si);t||0!==i?t&&0!==i&&this.element.classList.remove(F.Si):this.element.classList.add(F.Si)}this.label_.style.transform="rotate("+i+"rad)"}this.rotation_=i}}var B=i(3115),V=i(7344),q=i(7862),K=i(3297);let U=class{constructor(t,e,i){this.decay_=t,this.minVelocity_=e,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(t,e){this.points_.push(t,e,Date.now())}end(){if(this.points_.length<6)return!1;let t=Date.now()-this.delay_,e=this.points_.length-3;if(this.points_[e+2]<t)return!1;let i=e-3;for(;i>0&&this.points_[i+2]>t;)i-=3;let r=this.points_[e+2]-this.points_[i+2];if(r<1e3/60)return!1;let n=this.points_[e]-this.points_[i],o=this.points_[e+1]-this.points_[i+1];return this.angle_=Math.atan2(o,n),this.initialVelocity_=Math.sqrt(n*n+o*o)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}},Z="active";class j extends n.A{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Z)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(Z,t)}setMap(t){this.map_=t}}function H(t,e,i,r){let n=t.getZoom();if(void 0===n)return;let o=t.getConstrainedZoom(n+e),s=t.getResolutionForZoom(o);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:s,anchor:i,duration:void 0!==r?r:250,easing:D.vT})}let G=j,W=class extends G{constructor(t){super(),t=t||{},this.delta_=t.delta?t.delta:1,this.duration_=void 0!==t.duration?t.duration:250}handleEvent(t){let e=!1;if(t.type==g.DBLCLICK){let i=t.originalEvent,r=t.map,n=t.coordinate,o=i.shiftKey?-this.delta_:this.delta_;H(r.getView(),o,n,this.duration_),i.preventDefault(),e=!0}return!e}};var X=i(832);function Y(t){let e=arguments;return function(t){let i=!0;for(let r=0,n=e.length;r<n&&(i=i&&e[r](t));++r);return i}}let J=function(t){let e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},Q=function(t){let e=t.map.getTargetElement(),i=e.getRootNode(),r=t.map.getOwnerDocument().activeElement;return i instanceof ShadowRoot?i.host.contains(r):e.contains(r)},tt=function(t){let e=t.map.getTargetElement(),i=e.getRootNode();return!(i instanceof ShadowRoot?i.host:e).hasAttribute("tabindex")||Q(t)},te=K.rT,ti=function(t){let e=t.originalEvent;return"pointerId"in e&&0==e.button&&!(f.j&&f.ew&&e.ctrlKey)},tr=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},tn=function(t){let e=t.originalEvent;return f.ew?e.metaKey:e.ctrlKey},to=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},ts=function(t){let e=t.originalEvent,i=e.target.tagName;return"INPUT"!==i&&"SELECT"!==i&&"TEXTAREA"!==i&&!e.target.isContentEditable},ta=function(t){let e=t.originalEvent;return"pointerId"in e&&"mouse"==e.pointerType},tl=function(t){let e=t.originalEvent;return"pointerId"in e&&e.isPrimary&&0===e.button};function th(t){let e=t.length,i=0,r=0;for(let n=0;n<e;n++)i+=t[n].clientX,r+=t[n].clientY;return{clientX:i/e,clientY:r/e}}let td=class extends G{constructor(t){super(t=t||{}),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==g.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==g.POINTERUP){let e=this.handleUpEvent(t);this.handlingDownUpSequence=e&&this.targetPointers.length>0}}else if(t.type==g.POINTERDOWN){let i=this.handleDownEvent(t);this.handlingDownUpSequence=i,e=this.stopDown(i)}else t.type==g.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}},tc=class extends td{constructor(t){super({stopDown:K.W8}),t=t||{},this.kinetic_=t.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;const e=t.condition?t.condition:Y(tr,tl);this.condition_=t.onFocusOnly?Y(tt,e):e,this.noKinetic_=!1}handleDragEvent(t){let e=t.map;this.panning_||(this.panning_=!0,e.getView().beginInteraction());let i=this.targetPointers,r=e.getEventPixel(th(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){let e=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],i=t.map.getView();(0,X.hs)(e,i.getResolution()),(0,X.e$)(e,i.getRotation()),i.adjustCenterInternal(e)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=i.length,t.originalEvent.preventDefault()}handleUpEvent(t){let e=t.map,i=e.getView();if(0===this.targetPointers.length){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){let t=this.kinetic_.getDistance(),r=this.kinetic_.getAngle(),n=i.getCenterInternal(),o=e.getPixelFromCoordinateInternal(n),s=e.getCoordinateFromPixelInternal([o[0]-t*Math.cos(r),o[1]-t*Math.sin(r)]);i.animateInternal({center:i.getConstrainedCenter(s),duration:500,easing:D.vT})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(t){if(this.targetPointers.length>0&&this.condition_(t)){let e=t.map.getView();return this.lastCentroid=null,e.getAnimating()&&e.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}};var tu=i(8667);let tg=class extends td{constructor(t){t=t||{},super({stopDown:K.W8}),this.condition_=t.condition?t.condition:J,this.lastAngle_=void 0,this.duration_=void 0!==t.duration?t.duration:250}handleDragEvent(t){if(!ta(t))return;let e=t.map,i=e.getView();if(i.getConstraints().rotation===tu.b8)return;let r=e.getSize(),n=t.pixel,o=Math.atan2(r[1]/2-n[1],n[0]-r[0]/2);if(void 0!==this.lastAngle_){let t=o-this.lastAngle_;i.adjustRotationInternal(-t)}this.lastAngle_=o}handleUpEvent(t){return!ta(t)||(t.map.getView().endInteraction(this.duration_),!1)}handleDownEvent(t){return!!ta(t)&&!!(ti(t)&&this.condition_(t))&&(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0)}};var tp=i(6472),tm=i(3626);class tf extends tp.A{constructor(t){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+t,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){let t=this.startPixel_,e=this.endPixel_,i=this.element_.style;i.left=Math.min(t[0],e[0])+"px",i.top=Math.min(t[1],e[1])+"px",i.width=Math.abs(e[0]-t[0])+"px",i.height=Math.abs(e[1]-t[1])+"px"}setMap(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);let t=this.element_.style;t.left="inherit",t.top="inherit",t.width="inherit",t.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(t,e){this.startPixel_=t,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;let t=this.startPixel_,e=this.endPixel_,i=[t,[t[0],e[1]],e,[e[0],t[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);i[4]=i[0].slice(),this.geometry_?this.geometry_.setCoordinates([i]):this.geometry_=new tm.Ay([i])}getGeometry(){return this.geometry_}}let tv="boxcancel";class t_ extends o.Ay{constructor(t,e,i){super(t),this.coordinate=e,this.mapBrowserEvent=i}}let tw=class extends td{constructor(t){super(),this.on,this.once,this.un,t=t??{},this.box_=new tf(t.className||"ol-dragbox"),this.minArea_=t.minArea??64,t.onBoxEnd&&(this.onBoxEnd=t.onBoxEnd),this.startPixel_=null,this.condition_=t.condition??ti,this.boxEndCondition_=t.boxEndCondition??this.defaultBoxEndCondition}defaultBoxEndCondition(t,e,i){let r=i[0]-e[0],n=i[1]-e[1];return r*r+n*n>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(t){this.startPixel_&&(this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new t_("boxdrag",t.coordinate,t)))}handleUpEvent(t){if(!this.startPixel_)return!1;let e=this.boxEndCondition_(t,this.startPixel_,t.pixel);return e&&this.onBoxEnd(t),this.dispatchEvent(new t_(e?"boxend":tv,t.coordinate,t)),this.box_.setMap(null),this.startPixel_=null,!1}handleDownEvent(t){return!!this.condition_(t)&&(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new t_("boxstart",t.coordinate,t)),!0)}onBoxEnd(t){}setActive(t){!t&&(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new t_(tv,this.startPixel_,null)),this.startPixel_=null)),super.setActive(t)}setMap(t){this.getMap()&&(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new t_(tv,this.startPixel_,null)),this.startPixel_=null)),super.setMap(t)}},ty=class extends tw{constructor(t){super({condition:(t=t||{}).condition?t.condition:to,className:t.className||"ol-dragzoom",minArea:t.minArea}),this.duration_=void 0!==t.duration?t.duration:200,this.out_=void 0!==t.out&&t.out}onBoxEnd(t){let e=this.getMap().getView(),i=this.getGeometry();if(this.out_){let t=e.rotatedExtentForGeometry(i),r=e.getResolutionForExtentInternal(t),n=e.getResolution()/r;(i=i.clone()).scale(n*n)}e.fitInternal(i,{duration:this.duration_,easing:D.vT})}},tb="ArrowLeft",tC="ArrowRight",tx="ArrowDown",tE=class extends G{constructor(t){super(),t=t||{},this.defaultCondition_=function(t){return tr(t)&&ts(t)},this.condition_=void 0!==t.condition?t.condition:this.defaultCondition_,this.duration_=void 0!==t.duration?t.duration:100,this.pixelDelta_=void 0!==t.pixelDelta?t.pixelDelta:128}handleEvent(t){let e=!1;if(t.type==u.A.KEYDOWN){let r=t.originalEvent,n=r.key;if(this.condition_(t)&&(n==tx||n==tb||n==tC||"ArrowUp"==n)){let o=t.map.getView(),s=o.getResolution()*this.pixelDelta_,a=0,l=0;n==tx?l=-s:n==tb?a=-s:n==tC?a=s:l=s;let h=[a,l];(0,X.e$)(h,o.getRotation());var i=this.duration_;let d=o.getCenterInternal();if(d){let t=[d[0]+h[0],d[1]+h[1]];o.animateInternal({duration:void 0!==i?i:250,easing:D.sn,center:o.getConstrainedCenter(t)})}r.preventDefault(),e=!0}}return!e}},tA=class extends G{constructor(t){super(),t=t||{},this.condition_=t.condition?t.condition:function(t){return!tn(t)&&ts(t)},this.delta_=t.delta?t.delta:1,this.duration_=void 0!==t.duration?t.duration:100}handleEvent(t){let e=!1;if(t.type==u.A.KEYDOWN||t.type==u.A.KEYPRESS){let i=t.originalEvent,r=i.key;if(this.condition_(t)&&("+"===r||"-"===r)){let n=t.map,o="+"===r?this.delta_:-this.delta_;H(n.getView(),o,void 0,this.duration_),i.preventDefault(),e=!0}}return!e}};var tL=i(76);let tM=class extends G{constructor(t){super(t=t||{}),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=void 0!==t.maxDelta?t.maxDelta:1,this.duration_=void 0!==t.duration?t.duration:250,this.timeout_=void 0!==t.timeout?t.timeout:80,this.useAnchor_=void 0===t.useAnchor||t.useAnchor,this.constrainResolution_=void 0!==t.constrainResolution&&t.constrainResolution;const e=t.condition?t.condition:te;this.condition_=t.onFocusOnly?Y(tt,e):e,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300,this.ctrlKeyPressed_=!1,this.ctrlKeyListenerKeys_=[]}setMap(t){if(this.ctrlKeyListenerKeys_.forEach(p.JH),this.ctrlKeyListenerKeys_.length=0,this.ctrlKeyPressed_=!1,super.setMap(t),t){let e=t.getOwnerDocument();this.ctrlKeyListenerKeys_.push((0,p.KT)(e,"keydown",t=>{"Control"===t.key&&(this.ctrlKeyPressed_=!0)}),(0,p.KT)(e,"keyup",t=>{"Control"===t.key&&(this.ctrlKeyPressed_=!1)}))}}endInteraction_(){this.trackpadTimeoutId_=void 0;let t=this.getMap();if(!t)return;let e=t.getView(),i=this.lastDelta_?this.lastDelta_>0?1:-1:0;e.endInteraction(this.constrainResolution_||e.getConstrainResolution()?100:void 0,i,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null)}handleEvent(t){if(!this.condition_(t)||t.type!==u.A.WHEEL)return!0;let e=t.map,i=t.originalEvent;i.preventDefault();let r=i.ctrlKey&&!this.ctrlKeyPressed_;i.ctrlKey||(this.ctrlKeyPressed_=!1),this.useAnchor_&&(this.lastAnchor_=t.pixel);let n=i.deltaY;switch(i.deltaMode){case WheelEvent.DOM_DELTA_LINE:n*=40;break;case WheelEvent.DOM_DELTA_PAGE:n*=300}if(0===n)return!1;this.lastDelta_=n;let o=Date.now();void 0===this.startTime_&&(this.startTime_=o),(!this.mode_||o-this.startTime_>this.trackpadEventGap_)&&(this.mode_=4>Math.abs(n)?"trackpad":"wheel");let s=e.getView();if("trackpad"===this.mode_)return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(s.getAnimating()&&s.cancelAnimations(),s.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),r&&(n*=3),s.adjustZoom(-n/this.deltaPerZoom_,this.lastAnchor_?e.getCoordinateFromPixel(this.lastAnchor_):null),this.startTime_=o,!1;this.totalDelta_+=n;let a=Math.max(this.timeout_-(o-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,e),a),!1}handleWheelZoom_(t){let e=t.getView();e.getAnimating()&&e.cancelAnimations();let i=-(0,tL.qE)(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(e.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),H(e,i,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(t){this.useAnchor_=t,t||(this.lastAnchor_=null)}},tR=class extends td{constructor(t){const e=t=t||{};e.stopDown||(e.stopDown=K.W8),super(e),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=void 0!==t.threshold?t.threshold:.3,this.duration_=void 0!==t.duration?t.duration:250}handleDragEvent(t){let e=0,i=this.targetPointers[0],r=this.targetPointers[1],n=Math.atan2(r.clientY-i.clientY,r.clientX-i.clientX);if(void 0!==this.lastAngle_){let t=n-this.lastAngle_;this.rotationDelta_+=t,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),e=t}this.lastAngle_=n;let o=t.map,s=o.getView();s.getConstraints().rotation!==tu.b8&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(th(this.targetPointers))),this.rotating_&&(o.render(),s.adjustRotationInternal(e,this.anchor_)))}handleUpEvent(t){return!(this.targetPointers.length<2)||(t.map.getView().endInteraction(this.duration_),!1)}handleDownEvent(t){if(this.targetPointers.length>=2){let e=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}},tS=class extends td{constructor(t){const e=t=t||{};e.stopDown||(e.stopDown=K.W8),super(e),this.anchor_=null,this.duration_=void 0!==t.duration?t.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(t){let e=1,i=this.targetPointers[0],r=this.targetPointers[1],n=i.clientX-r.clientX,o=i.clientY-r.clientY,s=Math.sqrt(n*n+o*o);void 0!==this.lastDistance_&&(e=this.lastDistance_/s),this.lastDistance_=s;let a=t.map,l=a.getView();1!=e&&(this.lastScaleDelta_=e),this.anchor_=a.getCoordinateFromPixelInternal(a.getEventPixel(th(this.targetPointers))),a.render(),l.adjustResolutionInternal(e,this.anchor_)}handleUpEvent(t){if(this.targetPointers.length<2){let e=t.map.getView(),i=this.lastScaleDelta_>1?1:-1;return e.endInteraction(this.duration_,i),!1}return!0}handleDownEvent(t){if(this.targetPointers.length>=2){let e=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}};var tT=i(2298),tI=i(8097);let tP="addlayer",tO="removelayer";class tk extends o.Ay{constructor(t,e){super(t),this.layer=e}}let tz="layers";class tF extends tI.A{constructor(t){const e=Object.assign({},t=t||{});delete e.layers;let i=t.layers;super(e),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(tz,this.handleLayersChanged_),i?Array.isArray(i)?i=new l(i.slice(),{unique:!0}):(0,L.v)("function"==typeof i.getArray,"Expected `layers` to be an array or a `Collection`"):i=new l(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(p.JH),this.layersListenerKeys_.length=0;let t=this.getLayers();for(let e in this.layersListenerKeys_.push((0,p.KT)(t,"add",this.handleLayersAdd_,this),(0,p.KT)(t,r,this.handleLayersRemove_,this)),this.listenerKeys_)this.listenerKeys_[e].forEach(p.JH);(0,M.I)(this.listenerKeys_);let e=t.getArray();for(let t=0,i=e.length;t<i;t++){let i=e[t];this.registerLayerListeners_(i),this.dispatchEvent(new tk(tP,i))}this.changed()}registerLayerListeners_(t){let e=[(0,p.KT)(t,E.A.PROPERTYCHANGE,this.handleLayerChange_,this),(0,p.KT)(t,u.A.CHANGE,this.handleLayerChange_,this)];t instanceof tF&&e.push((0,p.KT)(t,tP,this.handleLayerGroupAdd_,this),(0,p.KT)(t,tO,this.handleLayerGroupRemove_,this)),this.listenerKeys_[(0,tT.v6)(t)]=e}handleLayerGroupAdd_(t){this.dispatchEvent(new tk(tP,t.layer))}handleLayerGroupRemove_(t){this.dispatchEvent(new tk(tO,t.layer))}handleLayersAdd_(t){let e=t.element;this.registerLayerListeners_(e),this.dispatchEvent(new tk(tP,e)),this.changed()}handleLayersRemove_(t){let e=t.element,i=(0,tT.v6)(e);this.listenerKeys_[i].forEach(p.JH),delete this.listenerKeys_[i],this.dispatchEvent(new tk(tO,e)),this.changed()}getLayers(){return this.get(tz)}setLayers(t){let e=this.getLayers();if(e){let t=e.getArray();for(let e=0,i=t.length;e<i;++e)this.dispatchEvent(new tk(tO,t[e]))}this.set(tz,t)}getLayersArray(t){return t=void 0!==t?t:[],this.getLayers().forEach(function(e){e.getLayersArray(t)}),t}getLayerStatesArray(t){let e=void 0!==t?t:[],i=e.length;this.getLayers().forEach(function(t){t.getLayerStatesArray(e)});let r=this.getLayerState(),n=r.zIndex;t||void 0!==r.zIndex||(n=0);for(let t=i,o=e.length;t<o;t++){let i=e[t];i.opacity*=r.opacity,i.visible=i.visible&&r.visible,i.maxResolution=Math.min(i.maxResolution,r.maxResolution),i.minResolution=Math.max(i.minResolution,r.minResolution),i.minZoom=Math.max(i.minZoom,r.minZoom),i.maxZoom=Math.min(i.maxZoom,r.maxZoom),void 0!==r.extent&&(void 0!==i.extent?i.extent=(0,q._N)(i.extent,r.extent):i.extent=r.extent),void 0===i.zIndex&&(i.zIndex=n)}return e}getSourceState(){return"ready"}}var tD=i(9323),t$=i(793),tN=i(3477);function tB(t,e,i){let r=t[e];t[e]=t[i],t[i]=r}class tV{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data,i=[];if(!tX(t,e))return i;let r=this.toBBox,n=[];for(;e;){for(let o=0;o<e.children.length;o++){let s=e.children[o],a=e.leaf?r(s):s;tX(t,a)&&(e.leaf?i.push(s):tW(t,a)?this._all(s,i):n.push(s))}e=n.pop()}return i}collides(t){let e=this.data;if(!tX(t,e))return!1;let i=[];for(;e;){for(let r=0;r<e.children.length;r++){let n=e.children[r],o=e.leaf?this.toBBox(n):n;if(tX(t,o)){if(e.leaf||tW(t,o))return!0;i.push(n)}}e=i.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let e=0;e<t.length;e++)this.insert(t[e]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){let t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=tY([]),this}remove(t,e){let i,r,n;if(!t)return this;let o=this.data,s=this.toBBox(t),a=[],l=[];for(;o||a.length;){if(o||(o=a.pop(),r=a[a.length-1],i=l.pop(),n=!0),o.leaf){let i=function(t,e,i){if(!i)return e.indexOf(t);for(let r=0;r<e.length;r++)if(i(t,e[r]))return r;return -1}(t,o.children,e);if(-1!==i){o.children.splice(i,1),a.push(o),this._condense(a);break}}!n&&!o.leaf&&tW(o,s)?(a.push(o),l.push(i),i=0,r=o,o=o.children[0]):r?(i++,o=r.children[i],n=!1):o=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let i=[];for(;t;)t.leaf?e.push(...t.children):i.push(...t.children),t=i.pop();return e}_build(t,e,i,r){let n,o=i-e+1,s=this._maxEntries;if(o<=s)return tq(n=tY(t.slice(e,i+1)),this.toBBox),n;r||(r=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,r-1))),(n=tY([])).leaf=!1,n.height=r;let a=Math.ceil(o/s),l=a*Math.ceil(Math.sqrt(s));tJ(t,e,i,l,this.compareMinX);for(let o=e;o<=i;o+=l){let e=Math.min(o+l-1,i);tJ(t,o,e,a,this.compareMinY);for(let i=o;i<=e;i+=a){let o=Math.min(i+a-1,e);n.children.push(this._build(t,i,o,r-1))}}return tq(n,this.toBBox),n}_chooseSubtree(t,e,i,r){for(;;){let s;if(r.push(e),e.leaf||r.length-1===i)break;let a=1/0,l=1/0;for(let i=0;i<e.children.length;i++){var n,o;let r=e.children[i],h=tH(r),d=(n=t,(Math.max((o=r).maxX,n.maxX)-Math.min(o.minX,n.minX))*(Math.max(o.maxY,n.maxY)-Math.min(o.minY,n.minY))-h);d<l?(l=d,a=h<a?h:a,s=r):d===l&&h<a&&(a=h,s=r)}e=s||e.children[0]}return e}_insert(t,e,i){let r=i?t:this.toBBox(t),n=[],o=this._chooseSubtree(r,this.data,e,n);for(o.children.push(t),tU(o,r);e>=0;)if(n[e].children.length>this._maxEntries)this._split(n,e),e--;else break;this._adjustParentBBoxes(r,n,e)}_split(t,e){let i=t[e],r=i.children.length,n=this._minEntries;this._chooseSplitAxis(i,n,r);let o=this._chooseSplitIndex(i,n,r),s=tY(i.children.splice(o,i.children.length-o));s.height=i.height,s.leaf=i.leaf,tq(i,this.toBBox),tq(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(i,s)}_splitRoot(t,e){this.data=tY([t,e]),this.data.height=t.height+1,this.data.leaf=!1,tq(this.data,this.toBBox)}_chooseSplitIndex(t,e,i){let r,n=1/0,o=1/0;for(let s=e;s<=i-e;s++){let e=tK(t,0,s,this.toBBox),a=tK(t,s,i,this.toBBox),l=function(t,e){let i=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY);return Math.max(0,Math.min(t.maxX,e.maxX)-i)*Math.max(0,Math.min(t.maxY,e.maxY)-r)}(e,a),h=tH(e)+tH(a);l<n?(n=l,r=s,o=h<o?h:o):l===n&&h<o&&(o=h,r=s)}return r||i-e}_chooseSplitAxis(t,e,i){let r=t.leaf?this.compareMinX:tZ,n=t.leaf?this.compareMinY:tj;this._allDistMargin(t,e,i,r)<this._allDistMargin(t,e,i,n)&&t.children.sort(r)}_allDistMargin(t,e,i,r){t.children.sort(r);let n=this.toBBox,o=tK(t,0,e,n),s=tK(t,i-e,i,n),a=tG(o)+tG(s);for(let r=e;r<i-e;r++){let e=t.children[r];tU(o,t.leaf?n(e):e),a+=tG(o)}for(let r=i-e-1;r>=e;r--){let e=t.children[r];tU(s,t.leaf?n(e):e),a+=tG(s)}return a}_adjustParentBBoxes(t,e,i){for(let r=i;r>=0;r--)tU(e[r],t)}_condense(t){for(let e=t.length-1,i;e>=0;e--)0===t[e].children.length?e>0?(i=t[e-1].children).splice(i.indexOf(t[e]),1):this.clear():tq(t[e],this.toBBox)}}function tq(t,e){tK(t,0,t.children.length,e,t)}function tK(t,e,i,r,n){n||(n=tY(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(let o=e;o<i;o++){let e=t.children[o];tU(n,t.leaf?r(e):e)}return n}function tU(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function tZ(t,e){return t.minX-e.minX}function tj(t,e){return t.minY-e.minY}function tH(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function tG(t){return t.maxX-t.minX+(t.maxY-t.minY)}function tW(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function tX(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function tY(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function tJ(t,e,i,r,n){let o=[e,i];for(;o.length;){if((i=o.pop())-(e=o.pop())<=r)continue;let s=e+Math.ceil((i-e)/r/2)*r;!function t(e,i,r=0,n=e.length-1,o=function(t,e){return t<e?-1:+(t>e)}){for(;n>r;){if(n-r>600){let s=n-r+1,a=i-r+1,l=Math.log(s),h=.5*Math.exp(2*l/3),d=.5*Math.sqrt(l*h*(s-h)/s)*(a-s/2<0?-1:1),c=Math.max(r,Math.floor(i-a*h/s+d)),u=Math.min(n,Math.floor(i+(s-a)*h/s+d));t(e,i,c,u,o)}let s=e[i],a=r,l=n;for(tB(e,r,i),o(e[n],s)>0&&tB(e,r,n);a<l;){for(tB(e,a,l),a++,l--;0>o(e[a],s);)a++;for(;o(e[l],s)>0;)l--}0===o(e[r],s)?tB(e,r,l):tB(e,++l,n),l<=i&&(r=l+1),i<=l&&(n=l-1)}}(t,s,e,i,n),o.push(e,s,s,i)}}var tQ=i(1975),t0=i(7003);let t1=0,t2=1<<t1++,t3=1<<t1++,t4=1<<t1++,t5=1<<t1++,t6=1<<t1++,t8=1<<t1++,t7=Math.pow(2,t1)-1,t9={[t2]:"boolean",[t3]:"number",[t4]:"string",[t5]:"color",[t6]:"number[]",[t8]:"size"},et=Object.keys(t9).map(Number).sort(O.V_);function ee(t){let e=[];for(let r of et){var i;(t&(i=r))===i&&e.push(t9[r])}return 0===e.length?"untyped":e.length<3?e.join(" or "):e.slice(0,-1).join(", ")+", or "+e[e.length-1]}class ei{constructor(t,e){if(!(t in t9))throw Error(`literal expressions must have a specific type, got ${ee(t)}`);this.type=t,this.value=e}}class er{constructor(t,e,...i){this.type=t,this.operator=e,this.args=i}}function en(){return{variables:new Set,properties:new Set,featureId:!1,geometryType:!1,mCoordinate:!1,mapState:!1}}function eo(t,e,i){switch(typeof t){case"boolean":if(e===t4)return new ei(t4,t?"true":"false");if((e&t2)!==t2)throw Error(`got a boolean, but expected ${ee(e)}`);return new ei(t2,t);case"number":if(e===t8)return new ei(t8,(0,t0.xq)(t));if(e===t2)return new ei(t2,!!t);if(e===t4)return new ei(t4,t.toString());if((e&t3)!==t3)throw Error(`got a number, but expected ${ee(e)}`);return new ei(t3,t);case"string":if(e===t5)return new ei(t5,(0,tQ.sH)(t));if(e===t2)return new ei(t2,!!t);if((e&t4)!==t4)throw Error(`got a string, but expected ${ee(e)}`);return new ei(t4,t)}if(!Array.isArray(t))throw Error("expression must be an array or a primitive value");if(0===t.length)throw Error("empty expression");if("string"==typeof t[0]){var r=t,n=e,o=i;let s=r[0],a=ex[s];if(!a)throw Error(`unknown operator: ${s}`);return a(r,n,o)}for(let e of t)if("number"!=typeof e)throw Error("expected an array of numbers");if(e===t8){if(2!==t.length)throw Error(`expected an array of two values for a size, got ${t.length}`);return new ei(t8,t)}if(e===t5){if(3===t.length)return new ei(t5,[...t,1]);if(4===t.length)return new ei(t5,t);throw Error(`expected an array of 3 or 4 values for a color, got ${t.length}`)}if((e&t6)!==t6)throw Error(`got an array of numbers, but expected ${ee(e)}`);return new ei(t6,t)}let es="concat",ea="geometry-type",el="resolution",eh="clamp",ed="floor",ec="ceil",eu="round",eg="atan",ep="sqrt",em="match",ef="between",ev="interpolate",e_="coalesce",ew="case",ey="number",eb="string",eC="to-string",ex={get:eI(eM(1,1/0),eE),var:eI(eM(1,1),function(t,e,i){let r=t[1];if("string"!=typeof r)throw Error("expected a string argument for var operation");return i.variables.add(r),[new ei(t4,r)]}),has:eI(eM(1,1/0),eE),id:eI(function(t,e,i){i.featureId=!0},eL),[es]:eI(eM(2,1/0),eS(t4)),[ea]:eI(function(t,e,i){i.geometryType=!0},eL),"line-metric":eI(function(t,e,i){i.mCoordinate=!0},eL),[el]:eI(eA,eL),zoom:eI(eA,eL),time:eI(eA,eL),any:eI(eM(2,1/0),eS(t2)),all:eI(eM(2,1/0),eS(t2)),"!":eI(eM(1,1),eS(t2)),"==":eI(eM(2,2),eS(t7)),"!=":eI(eM(2,2),eS(t7)),">":eI(eM(2,2),eS(t3)),">=":eI(eM(2,2),eS(t3)),"<":eI(eM(2,2),eS(t3)),"<=":eI(eM(2,2),eS(t3)),"*":eI(eM(2,1/0),eR),[e_]:eI(eM(2,1/0),eR),"/":eI(eM(2,2),eS(t3)),"+":eI(eM(2,1/0),eS(t3)),"-":eI(eM(2,2),eS(t3)),[eh]:eI(eM(3,3),eS(t3)),"%":eI(eM(2,2),eS(t3)),"^":eI(eM(2,2),eS(t3)),abs:eI(eM(1,1),eS(t3)),[ed]:eI(eM(1,1),eS(t3)),[ec]:eI(eM(1,1),eS(t3)),[eu]:eI(eM(1,1),eS(t3)),sin:eI(eM(1,1),eS(t3)),cos:eI(eM(1,1),eS(t3)),[eg]:eI(eM(1,2),eS(t3)),[ep]:eI(eM(1,1),eS(t3)),[em]:eI(eM(4,1/0),eT,function(t,e,i){let r=t.length-1,n=t4|t3|t2,o=eo(t[1],n,i),s=eo(t[t.length-1],e,i),a=Array(r-2);for(let e=0;e<r-2;e+=2){try{let r=eo(t[e+2],o.type,i);a[e]=r}catch(t){throw Error(`failed to parse argument ${e+1} of match expression: ${t.message}`)}try{let r=eo(t[e+3],s.type,i);a[e+1]=r}catch(t){throw Error(`failed to parse argument ${e+2} of match expression: ${t.message}`)}}return[o,...a,s]}),[ef]:eI(eM(3,3),eS(t3)),[ev]:eI(eM(6,1/0),eT,function(t,e,i){let r,n,o=t[1];switch(o[0]){case"linear":r=1;break;case"exponential":let s=o[1];if("number"!=typeof s||s<=0)throw Error(`expected a number base for exponential interpolation, got ${JSON.stringify(s)} instead`);r=s;break;default:throw Error(`invalid interpolation type: ${JSON.stringify(o)}`)}let a=new ei(t3,r);try{n=eo(t[2],t3,i)}catch(t){throw Error(`failed to parse argument 1 in interpolate expression: ${t.message}`)}let l=Array(t.length-3);for(let r=0;r<l.length;r+=2){try{let e=eo(t[r+3],t3,i);l[r]=e}catch(t){throw Error(`failed to parse argument ${r+2} for interpolate expression: ${t.message}`)}try{let n=eo(t[r+4],e,i);l[r+1]=n}catch(t){throw Error(`failed to parse argument ${r+3} for interpolate expression: ${t.message}`)}}return[a,n,...l]}),[ew]:eI(eM(3,1/0),function(t,e,i){let r=t[0],n=t.length-1;if(n%2==0)throw Error(`expected an odd number of arguments for ${r}, got ${n} instead`)},function(t,e,i){let r=eo(t[t.length-1],e,i),n=Array(t.length-1);for(let e=0;e<n.length-1;e+=2){try{let r=eo(t[e+1],t2,i);n[e]=r}catch(t){throw Error(`failed to parse argument ${e} of case expression: ${t.message}`)}try{let o=eo(t[e+2],r.type,i);n[e+1]=o}catch(t){throw Error(`failed to parse argument ${e+1} of case expression: ${t.message}`)}}return n[n.length-1]=r,n}),in:eI(eM(2,2),function(t,e,i){let r,n=t[2];if(!Array.isArray(n))throw Error('the second argument for the "in" operator must be an array');if("literal"===n[0]){if(!Array.isArray(n=n[1]))throw Error('failed to parse "in" expression: the literal operator must be followed by an array')}else if("string"==typeof n[0])throw Error('for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions');r="string"==typeof n[0]?t4:t3;let o=Array(n.length);for(let t=0;t<o.length;t++)try{let e=eo(n[t],r,i);o[t]=e}catch(e){throw Error(`failed to parse haystack item ${t} for "in" expression: ${e.message}`)}return[eo(t[1],r,i),...o]}),[ey]:eI(eM(1,1/0),eS(t7)),[eb]:eI(eM(1,1/0),eS(t7)),array:eI(eM(1,1/0),eS(t3)),color:eI(eM(1,4),eS(t3)),band:eI(eM(1,3),eS(t3)),palette:eI(eM(2,2),function(t,e,i){let r;try{r=eo(t[1],t3,i)}catch(t){throw Error(`failed to parse first argument in palette expression: ${t.message}`)}let n=t[2];if(!Array.isArray(n))throw Error("the second argument of palette must be an array");let o=Array(n.length);for(let t=0;t<o.length;t++){let e;try{e=eo(n[t],t5,i)}catch(e){throw Error(`failed to parse color at index ${t} in palette expression: ${e.message}`)}if(!(e instanceof ei))throw Error(`the palette color at index ${t} must be a literal value`);o[t]=e}return[r,...o]}),[eC]:eI(eM(1,1),eS(t2|t3|t4|t5))};function eE(t,e,i){let r=t.length-1,n=Array(r);for(let e=0;e<r;++e){let r=t[e+1];switch(typeof r){case"number":n[e]=new ei(t3,r);break;case"string":n[e]=new ei(t4,r);break;default:throw Error(`expected a string key or numeric array index for a get operation, got ${r}`)}0===e&&i.properties.add(String(r))}return n}function eA(t,e,i){i.mapState=!0}function eL(t,e,i){let r=t[0];if(1!==t.length)throw Error(`expected no arguments for ${r} operation`);return[]}function eM(t,e){return function(i,r,n){let o=i[0],s=i.length-1;if(t===e){if(s!==t)throw Error(`expected ${t} argument${1===t?"":"s"} for ${o}, got ${s}`)}else if(s<t||s>e){let i=e===1/0?`${t} or more`:`${t} to ${e}`;throw Error(`expected ${i} arguments for ${o}, got ${s}`)}}}function eR(t,e,i){let r=t.length-1,n=Array(r);for(let o=0;o<r;++o){let r=eo(t[o+1],e,i);n[o]=r}return n}function eS(t){return function(e,i,r){let n=e.length-1,o=Array(n);for(let i=0;i<n;++i){let n=eo(e[i+1],t,r);o[i]=n}return o}}function eT(t,e,i){let r=t[0],n=t.length-1;if(n%2==1)throw Error(`expected an even number of arguments for operation ${r}, got ${n} instead`)}function eI(...t){return function(e,i,r){let n,o=e[0];for(let o=0;o<t.length;o++){let s=t[o](e,i,r);if(o==t.length-1){if(!s)throw Error("expected last argument validator to return the parsed args");n=s}}return new er(i,o,...n)}}function eP(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function eO(t,e,i){return function t(e,i){if(e instanceof ei){if(e.type===t5&&"string"==typeof e.value){let t=(0,tQ.sH)(e.value);return function(){return t}}return function(){return e.value}}let r=e.operator;switch(r){case ey:case eb:case e_:var n=e,o=i;let s=n.operator,a=n.args.length,l=Array(a);for(let e=0;e<a;++e)l[e]=t(n.args[e],o);switch(s){case e_:return t=>{for(let e=0;e<a;++e){let i=l[e](t);if(null!=i)return i}throw Error("Expected one of the values to be non-null")};case ey:case eb:return t=>{for(let e=0;e<a;++e){let i=l[e](t);if(typeof i===s)return i}throw Error(`Expected one of the values to be a ${s}`)};default:throw Error(`Unsupported assertion operator ${s}`)}case"get":case"var":case"has":var h=e;let d=h.args[0].value;switch(h.operator){case"get":return t=>{let e=h.args,i=t.properties[d];for(let t=1,r=e.length;t<r;++t)i=i[e[t].value];return i};case"var":return t=>t.variables[d];case"has":return t=>{let e=h.args;if(!(d in t.properties))return!1;let i=t.properties[d];for(let t=1,r=e.length;t<r;++t){let r=e[t].value;if(!i||!Object.hasOwn(i,r))return!1;i=i[r]}return!0};default:throw Error(`Unsupported accessor operator ${h.operator}`)}case"id":return t=>t.featureId;case ea:return t=>t.geometryType;case es:{let r=e.args.map(e=>t(e,i));return t=>"".concat(...r.map(e=>e(t).toString()))}case el:return t=>t.resolution;case"any":case"all":case ef:case"in":case"!":var c=e,u=i;let g=c.operator,p=c.args.length,m=Array(p);for(let e=0;e<p;++e)m[e]=t(c.args[e],u);switch(g){case"any":return t=>{for(let e=0;e<p;++e)if(m[e](t))return!0;return!1};case"all":return t=>{for(let e=0;e<p;++e)if(!m[e](t))return!1;return!0};case ef:return t=>{let e=m[0](t),i=m[1](t),r=m[2](t);return e>=i&&e<=r};case"in":return t=>{let e=m[0](t);for(let i=1;i<p;++i)if(e===m[i](t))return!0;return!1};case"!":return t=>!m[0](t);default:throw Error(`Unsupported logical operator ${g}`)}case"==":case"!=":case"<":case"<=":case">":case">=":var f=e,v=i;let _=f.operator,w=t(f.args[0],v),y=t(f.args[1],v);switch(_){case"==":return t=>w(t)===y(t);case"!=":return t=>w(t)!==y(t);case"<":return t=>w(t)<y(t);case"<=":return t=>w(t)<=y(t);case">":return t=>w(t)>y(t);case">=":return t=>w(t)>=y(t);default:throw Error(`Unsupported comparison operator ${_}`)}case"*":case"/":case"+":case"-":case eh:case"%":case"^":case"abs":case ed:case ec:case eu:case"sin":case"cos":case eg:case ep:var b=e,C=i;let x=b.operator,E=b.args.length,A=Array(E);for(let e=0;e<E;++e)A[e]=t(b.args[e],C);switch(x){case"*":return t=>{let e=1;for(let i=0;i<E;++i)e*=A[i](t);return e};case"/":return t=>A[0](t)/A[1](t);case"+":return t=>{let e=0;for(let i=0;i<E;++i)e+=A[i](t);return e};case"-":return t=>A[0](t)-A[1](t);case eh:return t=>{let e=A[0](t),i=A[1](t);if(e<i)return i;let r=A[2](t);return e>r?r:e};case"%":return t=>A[0](t)%A[1](t);case"^":return t=>Math.pow(A[0](t),A[1](t));case"abs":return t=>Math.abs(A[0](t));case ed:return t=>Math.floor(A[0](t));case ec:return t=>Math.ceil(A[0](t));case eu:return t=>Math.round(A[0](t));case"sin":return t=>Math.sin(A[0](t));case"cos":return t=>Math.cos(A[0](t));case eg:if(2===E)return t=>Math.atan2(A[0](t),A[1](t));return t=>Math.atan(A[0](t));case ep:return t=>Math.sqrt(A[0](t));default:throw Error(`Unsupported numeric operator ${x}`)}case ew:var L=e,M=i;let R=L.args.length,S=Array(R);for(let e=0;e<R;++e)S[e]=t(L.args[e],M);return t=>{for(let e=0;e<R-1;e+=2)if(S[e](t))return S[e+1](t);return S[R-1](t)};case em:var T=e,I=i;let P=T.args.length,O=Array(P);for(let e=0;e<P;++e)O[e]=t(T.args[e],I);return t=>{let e=O[0](t);for(let i=1;i<P-1;i+=2)if(e===O[i](t))return O[i+1](t);return O[P-1](t)};case ev:var k=e,z=i;let F=k.args.length,D=Array(F);for(let e=0;e<F;++e)D[e]=t(k.args[e],z);return t=>{let e,i,r=D[0](t),n=D[1](t);for(let o=2;o<F;o+=2){let s=D[o](t),a=D[o+1](t),l=Array.isArray(a);if(l&&(a=(0,tQ.fu)(a)),s>=n){if(2===o)return a;if(l)return function(t,e,i,r,n,o){if(0==n-i)return r;let s=(0,tQ.eE)(r),a=(0,tQ.eE)(o),l=a[2]-s[2];l>180?l-=360:l<-180&&(l+=360);let h=[ek(t,e,i,s[0],n,a[0]),ek(t,e,i,s[1],n,a[1]),s[2]+ek(t,e,i,0,n,l),ek(t,e,i,r[3],n,o[3])];return(0,tQ.cD)(h)}(r,n,e,i,s,a);return ek(r,n,e,i,s,a)}e=s,i=a}return i};case eC:var $=e,N=i;let B=$.operator,V=$.args.length,q=Array(V);for(let e=0;e<V;++e)q[e]=t($.args[e],N);if(B===eC)return t=>{let e=q[0](t);return $.args[0].type===t5?(0,tQ.dI)(e):e.toString()};throw Error(`Unsupported convert operator ${B}`);default:throw Error(`Unsupported operator ${r}`)}}(eo(t,e,i),i)}function ek(t,e,i,r,n,o){let s=n-i;if(0===s)return r;let a=e-i;return r+(1===t?a/s:(Math.pow(t,a)-1)/(Math.pow(t,s)-1))*(o-r)}var ez=i(3420),eF=i(7965);function eD(t,e){return t+":"+(e?(0,tQ._j)(e):"null")}let e$=new class{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=1024}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let t=0;for(let e in this.cache_){let i=this.cache_[e];(3&t++)==0&&!i.hasListener()&&(delete this.cache_[e],delete this.patternCache_[e],--this.cacheSize_)}}}get(t,e){let i=eD(t,e);return i in this.cache_?this.cache_[i]:null}getPattern(t,e){let i=eD(t,e);return i in this.patternCache_?this.patternCache_[i]:null}set(t,e,i,r){let n=eD(t,e),o=n in this.cache_;this.cache_[n]=i,r&&(i.getImageState()===ez.A.IDLE&&i.load(),i.getImageState()===ez.A.LOADING?i.ready().then(()=>{this.patternCache_[n]=(0,V.lr)().createPattern(i.getImage(1),"repeat")}):this.patternCache_[n]=(0,V.lr)().createPattern(i.getImage(1),"repeat")),!o&&++this.cacheSize_}setSize(t){this.maxCacheSize_=t,this.expire()}},eN=null;class eB extends m.A{constructor(t,e,i,r,n){super(),this.hitDetectionImage_=null,this.image_=t,this.crossOrigin_=i?.crossOrigin,this.referrerPolicy_=i?.referrerPolicy,this.canvas_={},this.color_=n,this.imageState_=void 0===r?ez.A.IDLE:r,this.size_=t&&t.width&&t.height?[t.width,t.height]:null,this.src_=e,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,null!==this.crossOrigin_&&(this.image_.crossOrigin=this.crossOrigin_),void 0!==this.referrerPolicy_&&(this.image_.referrerPolicy=this.referrerPolicy_)}isTainted_(){if(void 0===this.tainted_&&this.imageState_===ez.A.LOADED){eN||(eN=(0,V.Y)(1,1,void 0,{willReadFrequently:!0})),eN.drawImage(this.image_,0,0);try{eN.getImageData(0,0,1,1),this.tainted_=!1}catch{eN=null,this.tainted_=!0}}return!0===this.tainted_}dispatchChangeEvent_(){this.dispatchEvent(u.A.CHANGE)}handleImageError_(){this.imageState_=ez.A.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=ez.A.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(t){return this.image_||this.initializeImage_(),this.replaceColor_(t),this.canvas_[t]?this.canvas_[t]:this.image_}setImage(t){this.image_=t}getPixelRatio(t){return this.replaceColor_(t),this.canvas_[t]?t:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){let t=this.size_[0],e=this.size_[1],i=(0,V.Y)(t,e);i.fillRect(0,0,t,e),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===ez.A.IDLE){this.image_||this.initializeImage_(),this.imageState_=ez.A.LOADING;try{void 0!==this.src_&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&(0,eF.RA)(this.image_,this.src_).then(t=>{this.image_=t,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(t){if(!this.color_||this.canvas_[t]||this.imageState_!==ez.A.LOADED)return;let e=this.image_,i=(0,V.Y)(Math.ceil(e.width*t),Math.ceil(e.height*t)),r=i.canvas;i.scale(t,t),i.drawImage(e,0,0),i.globalCompositeOperation="multiply",i.fillStyle=(0,tQ.oJ)(this.color_),i.fillRect(0,0,r.width/t,r.height/t),i.globalCompositeOperation="destination-in",i.drawImage(e,0,0),this.canvas_[t]=r}ready(){return this.ready_||(this.ready_=new Promise(t=>{if(this.imageState_===ez.A.LOADED||this.imageState_===ez.A.ERROR)t();else{let e=()=>{(this.imageState_===ez.A.LOADED||this.imageState_===ez.A.ERROR)&&(this.removeEventListener(u.A.CHANGE,e),t())};this.addEventListener(u.A.CHANGE,e)}})),this.ready_}}function eV(t,e,i,r,n,o){let s=void 0===e?void 0:e$.get(e,n);return s||(s=new eB(t,t&&"src"in t?t.src||void 0:e,i,r,n),e$.set(e,n,s,o)),o&&s&&!e$.getPattern(e,n)&&e$.set(e,n,s,o),s}function eq(t){return t?Array.isArray(t)?(0,tQ.dI)(t):"object"==typeof t&&"src"in t?function(t){if(!t.offset||!t.size)return e$.getPattern(t.src,t.color);let e=t.src+":"+t.offset,i=e$.getPattern(e,t.color);if(i)return i;let r=e$.get(t.src,null);if(r.getImageState()!==ez.A.LOADED)return null;let n=(0,V.Y)(t.size[0],t.size[1]);return n.drawImage(r.getImage(1),t.offset[0],t.offset[1],t.size[0],t.size[1],0,0,t.size[0],t.size[1]),eV(n.canvas,e,void 0,ez.A.LOADED,t.color,!0),e$.getPattern(e,t.color)}(t):t:null}let eK=class t{constructor(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=(0,t0.xq)(t.scale),this.displacement_=t.displacement,this.declutterMode_=t.declutterMode}clone(){let e=this.getScale();return new t({opacity:this.getOpacity(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return(0,tT.b0)()}getImage(t){return(0,tT.b0)()}getHitDetectionImage(){return(0,tT.b0)()}getPixelRatio(t){return 1}getImageState(){return(0,tT.b0)()}getImageSize(){return(0,tT.b0)()}getOrigin(){return(0,tT.b0)()}getSize(){return(0,tT.b0)()}setDisplacement(t){this.displacement_=t}setOpacity(t){this.opacity_=t}setRotateWithView(t){this.rotateWithView_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=(0,t0.xq)(t)}listenImageChange(t){(0,tT.b0)()}load(){(0,tT.b0)()}unlistenImageChange(t){(0,tT.b0)()}ready(){return Promise.resolve()}},eU=class t extends eK{constructor(t){super({opacity:1,rotateWithView:void 0!==t.rotateWithView&&t.rotateWithView,rotation:void 0!==t.rotation?t.rotation:0,scale:void 0!==t.scale?t.scale:1,displacement:void 0!==t.displacement?t.displacement:[0,0],declutterMode:t.declutterMode}),this.hitDetectionCanvas_=null,this.fill_=void 0!==t.fill?t.fill:null,this.origin_=[0,0],this.points_=t.points,this.radius=t.radius,this.radius2_=t.radius2,this.angle_=void 0!==t.angle?t.angle:0,this.stroke_=void 0!==t.stroke?t.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?ez.A.LOADING:ez.A.LOADED,this.imageState_===ez.A.LOADING&&this.ready().then(()=>this.imageState_=ez.A.LOADED),this.render()}clone(){let e=this.getScale(),i=new t({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return i.setOpacity(this.getOpacity()),i}getAnchor(){let t=this.size_,e=this.getDisplacement(),i=this.getScaleArray();return[t[0]/2-e[0]/i[0],t[1]/2+e[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(t){this.fill_=t,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(t){let e=this.fill_?.getKey(),i=`${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${e}`+Object.values(this.renderOptions_).join(","),r=e$.get(i,null)?.getImage(1);if(!r){let e=this.renderOptions_,n=Math.ceil(e.size*t),o=(0,V.Y)(n,n);this.draw_(e,o,t);let s=new eB(r=o.canvas,void 0,null,ez.A.LOADED,null);e$.set(i,null,s),createImageBitmap(r).then(t=>{s.setImage(t)})}return r}getPixelRatio(t){return t}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius}setRadius(t){this.radius!==t&&(this.radius=t,this.render())}getRadius2(){return this.radius2_}setRadius2(t){this.radius2_!==t&&(this.radius2_=t,this.render())}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t,this.render()}listenImageChange(t){}load(){}unlistenImageChange(t){}calculateLineJoinSize_(t,e,i){if(0===e||this.points_===1/0||"bevel"!==t&&"miter"!==t)return e;let r=this.radius,n=void 0===this.radius2_?r:this.radius2_;if(r<n){let t=r;r=n,n=t}let o=2*Math.PI/(void 0===this.radius2_?this.points_:2*this.points_),s=n*Math.sin(o),a=r-Math.sqrt(n*n-s*s),l=Math.sqrt(s*s+a*a),h=l/s;if("miter"===t&&h<=i)return h*e;let d=e/2/h,c=e/2*(a/l),u=Math.sqrt((r+d)*(r+d)+c*c)-r;if(void 0===this.radius2_||"bevel"===t)return 2*u;let g=r*Math.sin(o),p=n-Math.sqrt(r*r-g*g),m=Math.sqrt(g*g+p*p)/g;return m<=i?2*Math.max(u,m*e/2-n-r):2*u}createRenderOptions(){let t,e="round",i="round",r=0,n=null,o=0,s=0;this.stroke_&&(t=eq(this.stroke_.getColor()??"#000"),s=this.stroke_.getWidth()??1,n=this.stroke_.getLineDash(),o=this.stroke_.getLineDashOffset()??0,i=this.stroke_.getLineJoin()??"round",e=this.stroke_.getLineCap()??"round",r=this.stroke_.getMiterLimit()??10);let a=this.calculateLineJoinSize_(i,s,r);return{strokeStyle:t,strokeWidth:s,size:Math.ceil(2*Math.max(this.radius,this.radius2_||0)+a),lineCap:e,lineDash:n,lineDashOffset:o,lineJoin:i,miterLimit:r}}render(){this.renderOptions_=this.createRenderOptions();let t=this.renderOptions_.size;this.hitDetectionCanvas_=null,this.size_=[t,t]}draw_(t,e,i){if(e.scale(i,i),e.translate(t.size/2,t.size/2),this.createPath_(e),this.fill_){let t=this.fill_.getColor();null===t&&(t="#000"),e.fillStyle=eq(t),e.fill()}t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}createHitDetectionCanvas_(t){let e;if(this.fill_){let i=this.fill_.getColor(),r=0;"string"==typeof i&&(i=(0,tQ._j)(i)),null===i?r=1:Array.isArray(i)&&(r=4===i.length?i[3]:1),0===r&&(e=(0,V.Y)(t.size,t.size),this.drawHitDetectionCanvas_(t,e))}return e?e.canvas:this.getImage(1)}createPath_(t){let e=this.points_,i=this.radius;if(e===1/0)t.arc(0,0,i,0,2*Math.PI);else{let r=void 0===this.radius2_?i:this.radius2_;void 0!==this.radius2_&&(e*=2);let n=this.angle_-Math.PI/2,o=2*Math.PI/e;for(let s=0;s<e;s++){let e=n+s*o,a=s%2==0?i:r;t.lineTo(a*Math.cos(e),a*Math.sin(e))}t.closePath()}}drawHitDetectionCanvas_(t,e){e.translate(t.size/2,t.size/2),this.createPath_(e),e.fillStyle="#000",e.fill(),t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}},eZ=class t extends eU{constructor(t){super({points:1/0,fill:(t=t||{radius:5}).fill,radius:t.radius,stroke:t.stroke,scale:void 0!==t.scale?t.scale:1,rotation:void 0!==t.rotation?t.rotation:0,rotateWithView:void 0!==t.rotateWithView&&t.rotateWithView,displacement:void 0!==t.displacement?t.displacement:[0,0],declutterMode:t.declutterMode})}clone(){let e=this.getScale(),i=new t({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return i.setOpacity(this.getOpacity()),i}},ej=class t{constructor(t){t=t||{},this.patternImage_=null,this.color_=null,void 0!==t.color&&this.setColor(t.color)}clone(){let e=this.getColor();return new t({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(t){if(null!==t&&"object"==typeof t&&"src"in t){let e=eV(null,t.src,{crossOrigin:"anonymous"},void 0,t.offset?null:t.color?t.color:null,!(t.offset&&t.size));e.ready().then(()=>{this.patternImage_=null}),e.getImageState()===ez.A.IDLE&&e.load(),e.getImageState()===ez.A.LOADING&&(this.patternImage_=e)}this.color_=t}getKey(){let t=this.getColor();return t?t instanceof CanvasPattern||t instanceof CanvasGradient?(0,tT.v6)(t):"object"==typeof t&&"src"in t?t.src+":"+t.offset:(0,tQ._j)(t).toString():""}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}};function eH(t,e,i,r){return void 0!==i&&void 0!==r?[i/t,r/e]:void 0!==i?i/t:void 0!==r?r/e:1}let eG=class t extends eK{constructor(t){let e;const i=void 0!==(t=t||{}).opacity?t.opacity:1,r=void 0!==t.rotation?t.rotation:0,n=void 0!==t.scale?t.scale:1,o=void 0!==t.rotateWithView&&t.rotateWithView;super({opacity:i,rotation:r,scale:n,displacement:void 0!==t.displacement?t.displacement:[0,0],rotateWithView:o,declutterMode:t.declutterMode}),this.anchor_=void 0!==t.anchor?t.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=void 0!==t.anchorOrigin?t.anchorOrigin:"top-left",this.anchorXUnits_=void 0!==t.anchorXUnits?t.anchorXUnits:"fraction",this.anchorYUnits_=void 0!==t.anchorYUnits?t.anchorYUnits:"fraction",this.crossOrigin_=void 0!==t.crossOrigin?t.crossOrigin:null,this.referrerPolicy_=t.referrerPolicy;const s=void 0!==t.img?t.img:null;let a=t.src;if((0,L.v)(!(void 0!==a&&s),"`image` and `src` cannot be provided at the same time"),(void 0===a||0===a.length)&&s&&(a=s.src||(0,tT.v6)(s)),(0,L.v)(void 0!==a&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),(0,L.v)(void 0===t.width&&void 0===t.height||void 0===t.scale,"`width` or `height` cannot be provided together with `scale`"),void 0!==t.src?e=ez.A.IDLE:void 0!==s&&(e="complete"in s?s.complete?s.src?ez.A.LOADED:ez.A.IDLE:ez.A.LOADING:ez.A.LOADED),this.color_=void 0!==t.color?(0,tQ._j)(t.color):null,this.iconImage_=eV(s,a,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},e,this.color_),this.offset_=void 0!==t.offset?t.offset:[0,0],this.offsetOrigin_=void 0!==t.offsetOrigin?t.offsetOrigin:"top-left",this.origin_=null,this.size_=void 0!==t.size?t.size:null,this.initialOptions_,void 0!==t.width||void 0!==t.height){let e,i;if(t.size)[e,i]=t.size;else{const r=this.getImage(1);if(r.width&&r.height)e=r.width,i=r.height;else if(r instanceof HTMLImageElement){this.initialOptions_=t;const e=()=>{if(this.unlistenImageChange(e),!this.initialOptions_)return;let i=this.iconImage_.getSize();this.setScale(eH(i[0],i[1],t.width,t.height))};this.listenImageChange(e);return}}void 0!==e&&this.setScale(eH(e,i,t.width,t.height))}}clone(){let e,i,r;return this.initialOptions_?(i=this.initialOptions_.width,r=this.initialOptions_.height):e=Array.isArray(e=this.getScale())?e.slice():e,new t({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:e,width:i,height:r,size:null!==this.size_?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let t=this.normalizedAnchor_;if(!t){t=this.anchor_;let e=this.getSize();if("fraction"==this.anchorXUnits_||"fraction"==this.anchorYUnits_){if(!e)return null;t=this.anchor_.slice(),"fraction"==this.anchorXUnits_&&(t[0]*=e[0]),"fraction"==this.anchorYUnits_&&(t[1]*=e[1])}if("top-left"!=this.anchorOrigin_){if(!e)return null;t===this.anchor_&&(t=this.anchor_.slice()),("top-right"==this.anchorOrigin_||"bottom-right"==this.anchorOrigin_)&&(t[0]=-t[0]+e[0]),("bottom-left"==this.anchorOrigin_||"bottom-right"==this.anchorOrigin_)&&(t[1]=-t[1]+e[1])}this.normalizedAnchor_=t}let e=this.getDisplacement(),i=this.getScaleArray();return[t[0]-e[0]/i[0],t[1]+e[1]/i[1]]}setAnchor(t){this.anchor_=t,this.normalizedAnchor_=null}getColor(){return this.color_}setColor(t){let e=t?(0,tQ._j)(t):null;if(this.color_===e||this.color_&&e&&this.color_.length===e.length&&this.color_.every((t,i)=>t===e[i]))return;this.color_=e;let i=this.getSrc(),r=void 0!==i?null:this.getHitDetectionImage(),n=void 0!==i?ez.A.IDLE:this.iconImage_.getImageState();this.iconImage_=eV(r,i,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},n,this.color_)}getImage(t){return this.iconImage_.getImage(t)}getPixelRatio(t){return this.iconImage_.getPixelRatio(t)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let t=this.offset_;if("top-left"!=this.offsetOrigin_){let e=this.getSize(),i=this.iconImage_.getSize();if(!e||!i)return null;t=t.slice(),("top-right"==this.offsetOrigin_||"bottom-right"==this.offsetOrigin_)&&(t[0]=i[0]-e[0]-t[0]),("bottom-left"==this.offsetOrigin_||"bottom-right"==this.offsetOrigin_)&&(t[1]=i[1]-e[1]-t[1])}return this.origin_=t,this.origin_}getSrc(){return this.iconImage_.getSrc()}setSrc(t){this.iconImage_=eV(null,t,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},ez.A.IDLE,this.color_)}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let t=this.getScaleArray();return this.size_?this.size_[0]*t[0]:this.iconImage_.getImageState()==ez.A.LOADED?this.iconImage_.getSize()[0]*t[0]:void 0}getHeight(){let t=this.getScaleArray();return this.size_?this.size_[1]*t[1]:this.iconImage_.getImageState()==ez.A.LOADED?this.iconImage_.getSize()[1]*t[1]:void 0}setScale(t){delete this.initialOptions_,super.setScale(t)}listenImageChange(t){this.iconImage_.addEventListener(u.A.CHANGE,t)}load(){this.iconImage_.load()}unlistenImageChange(t){this.iconImage_.removeEventListener(u.A.CHANGE,t)}ready(){return this.iconImage_.ready()}},eW=class t{constructor(t){t=t||{},this.color_=void 0!==t.color?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=void 0!==t.lineDash?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.offset_=t.offset,this.width_=t.width}clone(){let e=this.getColor();return new t({color:Array.isArray(e)?e.slice():e||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),offset:this.getOffset(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getOffset(){return this.offset_}getWidth(){return this.width_}setColor(t){this.color_=t}setLineCap(t){this.lineCap_=t}setLineDash(t){this.lineDash_=t}setLineDashOffset(t){this.lineDashOffset_=t}setLineJoin(t){this.lineJoin_=t}setMiterLimit(t){this.miterLimit_=t}setOffset(t){this.offset_=t}setWidth(t){this.width_=t}};class eX{constructor(t){t=t||{},this.geometry_=null,this.geometryFunction_=eQ,void 0!==t.geometry&&this.setGeometry(t.geometry),this.fill_=void 0!==t.fill?t.fill:null,this.image_=void 0!==t.image?t.image:null,this.renderer_=void 0!==t.renderer?t.renderer:null,this.hitDetectionRenderer_=void 0!==t.hitDetectionRenderer?t.hitDetectionRenderer:null,this.stroke_=void 0!==t.stroke?t.stroke:null,this.text_=void 0!==t.text?t.text:null,this.zIndex_=t.zIndex}clone(){let t=this.getGeometry();return t&&"object"==typeof t&&(t=t.clone()),new eX({geometry:t??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(t){this.renderer_=t}setHitDetectionRenderer(t){this.hitDetectionRenderer_=t}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(t){this.fill_=t}getImage(){return this.image_}setImage(t){this.image_=t}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t}getText(){return this.text_}setText(t){this.text_=t}getZIndex(){return this.zIndex_}setGeometry(t){"function"==typeof t?this.geometryFunction_=t:"string"==typeof t?this.geometryFunction_=function(e){return e.get(t)}:t?void 0!==t&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=eQ,this.geometry_=t}setZIndex(t){this.zIndex_=t}}let eY=null;function eJ(t,e){if(!eY){let t=new ej({color:"rgba(255,255,255,0.4)"}),e=new eW({color:"#3399CC",width:1.25});eY=[new eX({image:new eZ({fill:t,stroke:e,radius:5}),fill:t,stroke:e})]}return eY}function eQ(t){return t.getGeometry()}let e0=class t{constructor(t){t=t||{},this.font_=t.font,this.rotation_=t.rotation,this.rotateWithView_=t.rotateWithView,this.keepUpright_=t.keepUpright,this.scale_=t.scale,this.scaleArray_=(0,t0.xq)(void 0!==t.scale?t.scale:1),this.text_=t.text,this.textAlign_=t.textAlign,this.justify_=t.justify,this.repeat_=t.repeat,this.textBaseline_=t.textBaseline,this.fill_=void 0!==t.fill?t.fill:new ej({color:"#333"}),this.maxAngle_=void 0!==t.maxAngle?t.maxAngle:Math.PI/4,this.placement_=void 0!==t.placement?t.placement:"point",this.overflow_=!!t.overflow,this.stroke_=void 0!==t.stroke?t.stroke:null,this.offsetX_=void 0!==t.offsetX?t.offsetX:0,this.offsetY_=void 0!==t.offsetY?t.offsetY:0,this.backgroundFill_=t.backgroundFill?t.backgroundFill:null,this.backgroundStroke_=t.backgroundStroke?t.backgroundStroke:null,this.padding_=void 0===t.padding?null:t.padding,this.declutterMode_=t.declutterMode}clone(){let e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),keepUpright:this.getKeepUpright(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()instanceof ej?this.getFill().clone():this.getFill(),stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getKeepUpright(){return this.keepUpright_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(t){this.overflow_=t}setFont(t){this.font_=t}setMaxAngle(t){this.maxAngle_=t}setOffsetX(t){this.offsetX_=t}setOffsetY(t){this.offsetY_=t}setPlacement(t){this.placement_=t}setRepeat(t){this.repeat_=t}setRotateWithView(t){this.rotateWithView_=t}setKeepUpright(t){this.keepUpright_=t}setFill(t){this.fill_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=(0,t0.xq)(void 0!==t?t:1)}setStroke(t){this.stroke_=t}setText(t){this.text_=t}setTextAlign(t){this.textAlign_=t}setJustify(t){this.justify_=t}setTextBaseline(t){this.textBaseline_=t}setBackgroundFill(t){this.backgroundFill_=t}setBackgroundStroke(t){this.backgroundStroke_=t}setPadding(t){this.padding_=t}};function e1(t){return!0}function e2(t){let e=en(),i=t.length,r=Array(i);for(let n=0;n<i;++n)r[n]=e3(t[n],e);let n=eP(),o=Array(i);return function(t,s){if(n.properties=t.getPropertiesInternal(),n.resolution=s,e.featureId){let e=t.getId();void 0!==e?n.featureId=e:n.featureId=null}let a=0;for(let t=0;t<i;++t){let e=r[t](n);e&&(o[a]=e,a+=1)}return o.length=a,o}}function e3(t,e){var i,r,n,o,s,a;let l,h,d,c,u,g,p,m,f,v,_,w,y,b,C,x,E,A,L,R,S,T,I,P,O,k,z,F,D,$,N=e4(t,"",e),B=e5(t,"",e),V=function(t,e){let i="text-",r=e7(t,i+"value",e);if(!r)return null;let n=e4(t,i,e),o=e4(t,i+"background-",e),s=e5(t,i,e),a=e5(t,i+"background-",e),l=e7(t,i+"font",e),h=e8(t,i+"max-angle",e),d=e8(t,i+"offset-x",e),c=e8(t,i+"offset-y",e),u=e9(t,i+"overflow",e),g=e7(t,i+"placement",e),p=e8(t,i+"repeat",e),m=io(t,i+"scale",e),f=e9(t,i+"rotate-with-view",e),v=e8(t,i+"rotation",e),_=e7(t,i+"align",e),w=e7(t,i+"justify",e),y=e7(t,i+"baseline",e),b=e9(t,i+"keep-upright",e),C=ie(t,i+"padding",e),x=new e0({declutterMode:ih(t,i+"declutter-mode")});return function(t){if(x.setText(r(t)),n&&x.setFill(n(t)),o&&x.setBackgroundFill(o(t)),s&&x.setStroke(s(t)),a&&x.setBackgroundStroke(a(t)),l&&x.setFont(l(t)),h&&x.setMaxAngle(h(t)),d&&x.setOffsetX(d(t)),c&&x.setOffsetY(c(t)),u&&x.setOverflow(u(t)),g){let e=g(t);if("point"!==e&&"line"!==e)throw Error("Expected point or line for text-placement");x.setPlacement(e)}if(p&&x.setRepeat(p(t)),m&&x.setScale(m(t)),f&&x.setRotateWithView(f(t)),v&&x.setRotation(v(t)),_){let e=_(t);if("left"!==e&&"center"!==e&&"right"!==e&&"end"!==e&&"start"!==e)throw Error("Expected left, right, center, start, or end for text-align");x.setTextAlign(e)}if(w){let e=w(t);if("left"!==e&&"right"!==e&&"center"!==e)throw Error("Expected left, right, or center for text-justify");x.setJustify(e)}if(y){let e=y(t);if("bottom"!==e&&"top"!==e&&"middle"!==e&&"alphabetic"!==e&&"hanging"!==e)throw Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");x.setTextBaseline(e)}return C&&x.setPadding(C(t)),b&&x.setKeepUpright(b(t)),x}}(t,e),q=(i=t,r=e,"icon-src"in i?(n=i,o=r,c=ic(n[d=(h="icon-")+"src"],d),u=ii(n,h+"anchor",o),g=io(n,h+"scale",o),p=e8(n,h+"opacity",o),m=ii(n,h+"displacement",o),f=e8(n,h+"rotation",o),v=e9(n,h+"rotate-with-view",o),_=ia(n,h+"anchor-origin"),w=il(n,h+"anchor-x-units"),y=il(n,h+"anchor-y-units"),b=e6(n,h+"color"),C=null,void 0!==b&&(Array.isArray(b)&&b.length>0&&"string"==typeof b[0]?C=it(n,h+"color",o):l=ig(b,h+"color")),x=function(t,e){let i=t[e];if(void 0!==i){if("string"!=typeof i)throw Error(`Expected a string for ${e}`);return i}}(n,h+"cross-origin"),E=function(t,e){let i=t[e];if(void 0!==i)return id(i,e)}(n,h+"offset"),A=ia(n,h+"offset-origin"),L=is(n,h+"width"),R={src:c,anchorOrigin:_,anchorXUnits:w,anchorYUnits:y,crossOrigin:x,offset:E,offsetOrigin:A,height:is(n,h+"height"),width:L,size:function(t,e){let i=t[e];if(void 0!==i){if("number"==typeof i)return(0,t0.xq)(i);if(!Array.isArray(i)||2!==i.length||"number"!=typeof i[0]||"number"!=typeof i[1])throw Error(`Expected a number or size array for ${e}`);return i}}(n,h+"size"),declutterMode:ih(n,h+"declutter-mode")},S=null,function(t){if(S)C&&S.setColor(C(t));else{let e=C?C(t):l;S=new eG(void 0!==e?Object.assign({},R,{color:e}):Object.assign({},R))}return p&&S.setOpacity(p(t)),m&&S.setDisplacement(m(t)),f&&S.setRotation(f(t)),v&&S.setRotateWithView(v(t)),g&&S.setScale(g(t)),u&&S.setAnchor(u(t)),S}):"shape-points"in i?function(t,e){let i="shape-",r=i+"points",n=i+"radius",o=iu(t[r],r);if(!(n in t))throw Error(`Expected a number for ${n}`);let s=e8(t,n,e),a="number"==typeof t[n]?t[n]:5,l=i+"radius2",h=e8(t,l,e),d="number"==typeof t[l]?t[l]:void 0,c=e4(t,i,e),u=e5(t,i,e),g=io(t,i+"scale",e),p=ii(t,i+"displacement",e),m=e8(t,i+"rotation",e),f=e9(t,i+"rotate-with-view",e),v=new eU({points:o,radius:a,radius2:d,angle:is(t,i+"angle"),declutterMode:ih(t,i+"declutter-mode")});return function(t){return s&&v.setRadius(s(t)),h&&v.setRadius2(h(t)),c&&v.setFill(c(t)),u&&v.setStroke(u(t)),p&&v.setDisplacement(p(t)),m&&v.setRotation(m(t)),f&&v.setRotateWithView(f(t)),g&&v.setScale(g(t)),v}}(i,r):"circle-radius"in i?(I=e4(s=i,T="circle-",a=r),P=e5(s,T,a),O=e8(s,T+"radius",a),k=io(s,T+"scale",a),z=ii(s,T+"displacement",a),F=e8(s,T+"rotation",a),D=e9(s,T+"rotate-with-view",a),$=new eZ({radius:5,declutterMode:ih(s,T+"declutter-mode")}),function(t){return O&&$.setRadius(O(t)),I&&$.setFill(I(t)),P&&$.setStroke(P(t)),z&&$.setDisplacement(z(t)),F&&$.setRotation(F(t)),D&&$.setRotateWithView(D(t)),k&&$.setScale(k(t)),$}):null),K=e8(t,"z-index",e);if(!N&&!B&&!V&&!q&&!(0,M.p)(t))throw Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(t));let U=new eX;return function(t){let e=!0;if(N){let i=N(t);i&&(e=!1),U.setFill(i)}if(B){let i=B(t);i&&(e=!1),U.setStroke(i)}if(V){let i=V(t);i&&(e=!1),U.setText(i)}if(q){let i=q(t);i&&(e=!1),U.setImage(i)}return(K&&U.setZIndex(K(t)),e)?null:U}}function e4(t,e,i){let r;if(e+"fill-pattern-src"in t){var n,o,s;let a,l,h,d;a=e7(n=t,(o=e+"fill-")+"pattern-src",s=i),l=ir(n,o+"pattern-offset",s),h=ir(n,o+"pattern-size",s),d=it(n,o+"color",s),r=function(t){return{src:a(t),offset:l&&l(t),size:h&&h(t),color:d&&d(t)}}}else{if("none"===t[e+"fill-color"])return t=>null;r=it(t,e+"fill-color",i)}if(!r)return null;let a=new ej;return function(t){let e=r(t);return e===tQ.qV?null:(a.setColor(e),a)}}function e5(t,e,i){let r=e8(t,e+"stroke-width",i),n=it(t,e+"stroke-color",i);if(!r&&!n)return null;let o=e7(t,e+"stroke-line-cap",i),s=e7(t,e+"stroke-line-join",i),a=ie(t,e+"stroke-line-dash",i),l=e8(t,e+"stroke-line-dash-offset",i),h=e8(t,e+"stroke-miter-limit",i),d=e8(t,e+"stroke-offset",i),c=new eW;return function(t){if(n){let e=n(t);if(e===tQ.qV)return null;c.setColor(e)}if(r&&c.setWidth(r(t)),o){let e=o(t);if("butt"!==e&&"round"!==e&&"square"!==e)throw Error("Expected butt, round, or square line cap");c.setLineCap(e)}if(s){let e=s(t);if("bevel"!==e&&"round"!==e&&"miter"!==e)throw Error("Expected bevel, round, or miter line join");c.setLineJoin(e)}return a&&c.setLineDash(a(t)),l&&c.setLineDashOffset(l(t)),h&&c.setMiterLimit(h(t)),d&&c.setOffset(d(t)),c}}function e6(t,e){if(!(e in t))return;let i=t[e];return void 0===i?void 0:i}function e8(t,e,i){let r=e6(t,e);if(void 0===r)return;let n=eO(r,t3,i);return function(t){return iu(n(t),e)}}function e7(t,e,i){let r=e6(t,e);if(void 0===r)return null;let n=eO(r,t4,i);return function(t){return ic(n(t),e)}}function e9(t,e,i){let r=e6(t,e);if(void 0===r)return null;let n=eO(r,t2,i);return function(t){let i=n(t);if("boolean"!=typeof i)throw Error(`Expected a boolean for ${e}`);return i}}function it(t,e,i){let r=e6(t,e);if(void 0===r)return null;let n=eO(r,t5,i);return function(t){return ig(n(t),e)}}function ie(t,e,i){let r=e6(t,e);if(void 0===r)return null;if(Array.isArray(r)&&(0===r.length||"string"!=typeof r[0])){let t=r.map((t,r)=>{if("number"==typeof t)return()=>t;let n=eO(t,t3,i);return function(t){return iu(n(t),`${e}[${r}]`)}});return function(e){let i=Array(t.length);for(let r=0;r<t.length;++r)i[r]=t[r](e);return i}}let n=eO(r,t6,i);return function(t){return id(n(t),e)}}function ii(t,e,i){let r=e6(t,e);if(void 0===r)return null;let n=eO(r,t6,i);return function(t){let i=id(n(t),e);if(2!==i.length)throw Error(`Expected two numbers for ${e}`);return i}}function ir(t,e,i){let r=e6(t,e);if(void 0===r)return null;let n=eO(r,t6,i);return function(t){return ip(n(t),e)}}function io(t,e,i){let r=e6(t,e);if(void 0===r)return null;let n=eO(r,t6|t3,i);return function(t){var i,r;return i=n(t),r=e,"number"==typeof i?i:ip(i,r)}}function is(t,e){let i=t[e];if(void 0!==i){if("number"!=typeof i)throw Error(`Expected a number for ${e}`);return i}}function ia(t,e){let i=t[e];if(void 0!==i){if("bottom-left"!==i&&"bottom-right"!==i&&"top-left"!==i&&"top-right"!==i)throw Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);return i}}function il(t,e){let i=t[e];if(void 0!==i){if("pixels"!==i&&"fraction"!==i)throw Error(`Expected pixels or fraction for ${e}`);return i}}function ih(t,e){let i=t[e];if(void 0!==i){if("string"!=typeof i)throw Error(`Expected a string for ${e}`);if("declutter"!==i&&"obstacle"!==i&&"none"!==i)throw Error(`Expected declutter, obstacle, or none for ${e}`);return i}}function id(t,e){if(!Array.isArray(t))throw Error(`Expected an array for ${e}`);let i=t.length;for(let r=0;r<i;++r)if("number"!=typeof t[r])throw Error(`Expected an array of numbers for ${e}`);return t}function ic(t,e){if("string"!=typeof t)throw Error(`Expected a string for ${e}`);return t}function iu(t,e){if("number"!=typeof t)throw Error(`Expected a number for ${e}`);return t}function ig(t,e){if("string"==typeof t)return t;let i=id(t,e),r=i.length;if(r<3||r>4)throw Error(`Expected a color with 3 or 4 values for ${e}`);return i}function ip(t,e){let i=id(t,e);if(2!==i.length)throw Error(`Expected an array of two numbers for ${e}`);return i}let im="renderOrder";class iv extends tD.A{constructor(t){const e=Object.assign({},t=t||{});delete e.style,delete e.renderBuffer,delete e.updateWhileAnimating,delete e.updateWhileInteracting,super(e),this.declutter_=t.declutter?String(t.declutter):void 0,this.renderBuffer_=void 0!==t.renderBuffer?t.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(t.style),this.updateWhileAnimating_=void 0!==t.updateWhileAnimating&&t.updateWhileAnimating,this.updateWhileInteracting_=void 0!==t.updateWhileInteracting&&t.updateWhileInteracting}getDeclutter(){return this.declutter_}getFeatures(t){return super.getFeatures(t)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(im)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(t,e){let i=this.getDeclutter();i in t.declutter==!1&&(t.declutter[i]=new tV(9)),this.getRenderer().renderDeclutter(t,e)}setRenderOrder(t){this.set(im,t)}setStyle(t){this.style_=void 0===t?eJ:t;let e=function(t){if(void 0===t)return eJ;if(!t)return null;if("function"==typeof t||t instanceof eX)return t;if(!Array.isArray(t))return e2([t]);if(0===t.length)return[];let e=t.length,i=t[0];if(i instanceof eX){let i=Array(e);for(let r=0;r<e;++r){let e=t[r];if(!(e instanceof eX))throw Error("Expected a list of style instances");i[r]=e}return i}if("style"in i){let i,r,n,o=Array(e);for(let i=0;i<e;++i){let e=t[i];if(!("style"in e))throw Error("Expected a list of rules with a style property");o[i]=e}return r=function(t,e){let i=t.length,r=Array(i);for(let n=0;n<i;++n){let i,o=t[n],s="filter"in o?eO(o.filter,t2,e):e1;if(Array.isArray(o.style)){let t=o.style.length;i=Array(t);for(let r=0;r<t;++r)i[r]=e3(o.style[r],e)}else i=[e3(o.style,e)];r[n]={filter:s,styles:i}}return function(e){let n=[],o=!1;for(let s=0;s<i;++s)if((0,r[s].filter)(e)&&(!t[s].else||!o))for(let t of(o=!0,r[s].styles)){let i=t(e);i&&n.push(i)}return n}}(o,i=en()),n=eP(),function(t,e){if(n.properties=t.getPropertiesInternal(),n.resolution=e,i.featureId){let e=t.getId();void 0!==e?n.featureId=e:n.featureId=null}return i.geometryType&&(n.geometryType=function t(e){if(!e)return"";let i=e.getType();switch(i){case"Point":case"LineString":case"Polygon":return i;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return i.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return t(e.getGeometries()[0]);default:return""}}(t.getGeometry())),r(n)}}return e2(t)}(t);this.styleFunction_=null===t?void 0:function(t){let e;if("function"==typeof t)e=t;else{let i;Array.isArray(t)?i=t:((0,L.v)("function"==typeof t.getZIndex,"Expected an `Style` or an array of `Style`"),i=[t]),e=function(){return i}}return e}(e),this.changed()}setDeclutter(t){this.declutter_=t?String(t):void 0,this.changed()}}var i_=i(4757);let iw=new n.A;var iy=i(2416);class ib extends tp.A{constructor(t){super(),this.map_=t}dispatchRenderEvent(t,e){(0,tT.b0)()}calculateMatrices2D(t){let e=t.viewState,i=t.coordinateToPixelTransform,r=t.pixelToCoordinateTransform;(0,iy.Zz)(i,t.size[0]/2,t.size[1]/2,1/e.resolution,-1/e.resolution,-e.rotation,-e.center[0],-e.center[1]),(0,iy.T9)(r,i)}forEachFeatureAtCoordinate(t,e,i,r,n,o,s,a){let l,h=e.viewState;function d(t,e,i,r){return n.call(o,e,t?i:null,r)}let c=h.projection,u=(0,X.Li)(t.slice(),c),g=[[0,0]];if(c.canWrapX()&&r){let t=c.getExtent(),e=(0,q.RG)(t);g.push([-e,0],[e,0])}let p=e.layerStatesArray,m=p.length,f=[],v=[];for(let r=0;r<g.length;r++)for(let n=m-1;n>=0;--n){let o=p[n],c=o.layer;if(c.hasRenderer()&&(0,tD.l)(o,h)&&s.call(a,c)){let n=c.getRenderer(),s=c.getSource();if(n&&s){let a=s.getWrapX()?u:t,h=d.bind(null,o.managed);v[0]=a[0]+g[r][0],v[1]=a[1]+g[r][1],l=n.forEachFeatureAtCoordinate(v,e,i,h,f)}if(l)return l}}if(0===f.length)return;let _=1/f.length;return f.forEach((t,e)=>t.distanceSq+=e*_),f.sort((t,e)=>t.distanceSq-e.distanceSq),f.some(t=>l=t.callback(t.feature,t.layer,t.geometry)),l}hasFeatureAtCoordinate(t,e,i,r,n,o){return void 0!==this.forEachFeatureAtCoordinate(t,e,i,r,K.rT,this,n,o)}getMap(){return this.map_}renderFrame(t){(0,tT.b0)()}scheduleExpireIconCache(t){e$.canExpireCache()&&t.postRenderFunctions.push(iC)}}function iC(t,e){e$.expire()}let ix=ib,iE=class extends ix{constructor(t){super(t),this.fontChangeListenerKey_=(0,p.KT)(iw,E.A.PROPERTYCHANGE,t.redrawText,t),this.element_=f.Wl?(0,V.mH)():document.createElement("div");const e=this.element_.style;e.position="absolute",e.width="100%",e.height="100%",e.zIndex="0",this.element_.className=F.XI+" ol-layers";const i=t.getViewport();i&&i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(t,e){let i=this.getMap();if(i.hasListener(t)){let r=new i_.A(t,void 0,e);i.dispatchEvent(r)}}disposeInternal(){(0,p.JH)(this.fontChangeListenerKey_),this.element_.remove(),super.disposeInternal()}renderFrame(t){if(!t){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(t),this.dispatchRenderEvent(tN.A.PRECOMPOSE,t);let e=t.layerStatesArray.sort((t,e)=>t.zIndex-e.zIndex);e.some(t=>t.layer instanceof iv&&t.layer.getDeclutter())&&(t.declutter={});let i=t.viewState;this.children_.length=0;let r=[],n=null;for(let o=0,s=e.length;o<s;++o){let s=e[o];t.layerIndex=o;let a=s.layer,l=a.getSourceState();if(!(0,tD.l)(s,i)||"ready"!=l&&"undefined"!=l){a.unrender();continue}let h=a.render(t,n);h&&(h!==n&&(this.children_.push(h),n=h),r.push(s))}this.declutter(t,r),(0,V.WM)(this.element_,this.children_);let o=this.getMap().getTargetElement();if((0,V.rB)(o)){let t=o.getContext("2d");for(let e of this.children_){let i=e.firstElementChild||e,r=e.style.backgroundColor;if(r&&(!(0,V.rB)(i)||i.width>0)&&(t.fillStyle=r,t.fillRect(0,0,o.width,o.height)),(0,V.rB)(i)&&i.width>0){t.save();let r=e.style.opacity||i.style.opacity;t.globalAlpha=""===r?1:Number(r);let n=i.style.transform;if(n)t.transform(...(0,iy.sH)(n));else{let e=parseFloat(i.style.width)/i.width,r=parseFloat(i.style.height)/i.height;t.transform(e,0,0,r,0,0)}t.drawImage(i,0,0),t.restore()}}}this.dispatchRenderEvent(tN.A.POSTCOMPOSE,t),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(t)}declutter(t,e){if(t.declutter){for(let i=e.length-1;i>=0;--i){let r=e[i],n=r.layer;n.getDeclutter()&&n.renderDeclutter(t,r)}e.forEach(e=>e.layer.renderDeferred(t))}}};class iA extends n.A{constructor(t){super(),t=t||{},this.on,this.once,this.un;const e=function(t){let e,i,r,n=null;void 0!==t.keyboardEventTarget&&(n="string"==typeof t.keyboardEventTarget?document.getElementById(t.keyboardEventTarget):t.keyboardEventTarget);let o={},s=t.layers&&"function"==typeof t.layers.getLayers?t.layers:new tF({layers:t.layers});return o[y]=s,o[C]=t.target,o[x]=t.view instanceof I.Ay?t.view:new I.Ay,void 0!==t.controls&&(Array.isArray(t.controls)?e=new l(t.controls.slice()):((0,L.v)("function"==typeof t.controls.getArray,"Expected `controls` to be an array or an `ol/Collection.js`"),e=t.controls)),void 0!==t.interactions&&(Array.isArray(t.interactions)?i=new l(t.interactions.slice()):((0,L.v)("function"==typeof t.interactions.getArray,"Expected `interactions` to be an array or an `ol/Collection.js`"),i=t.interactions)),void 0!==t.overlays?Array.isArray(t.overlays)?r=new l(t.overlays.slice()):((0,L.v)("function"==typeof t.overlays.getArray,"Expected `overlays` to be an array or an `ol/Collection.js`"),r=t.overlays):r=new l,{controls:e,interactions:i,keyboardEventTarget:n,overlays:r,values:o}}(t);this.renderComplete_=!1,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=void 0!==t.maxTilesLoading?t.maxTilesLoading:16,this.pixelRatio_=void 0!==t.pixelRatio?t.pixelRatio:f.cr,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=(0,iy.vt)(),this.pixelToCoordinateTransform_=(0,iy.vt)(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,f.Wl||(this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_)),this.mapBrowserEventHandler_=null,this.moveTolerance_=t.moveTolerance,this.keyboardEventTarget_=e.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,f.Wl||(this.resizeObserver_=new ResizeObserver(()=>this.updateSize())),this.controls=e.controls||(f.Wl?new l:function(t){t=t||{};let e=new l;return(void 0===t.zoom||t.zoom)&&e.push(new B.A(t.zoomOptions)),(void 0===t.rotate||t.rotate)&&e.push(new N(t.rotateOptions)),(void 0===t.attribution||t.attribution)&&e.push(new z.A(t.attributionOptions)),e}()),this.interactions=e.interactions||(f.Wl?new l:function(t){t=t||{};let e=new l,i=new U(-.005,.05,100);return(void 0===t.altShiftDragRotate||t.altShiftDragRotate)&&e.push(new tg),(void 0===t.doubleClickZoom||t.doubleClickZoom)&&e.push(new W({delta:t.zoomDelta,duration:t.zoomDuration})),(void 0===t.dragPan||t.dragPan)&&e.push(new tc({onFocusOnly:t.onFocusOnly,kinetic:i})),(void 0===t.pinchRotate||t.pinchRotate)&&e.push(new tR),(void 0===t.pinchZoom||t.pinchZoom)&&e.push(new tS({duration:t.zoomDuration})),(void 0===t.keyboard||t.keyboard)&&(e.push(new tE),e.push(new tA({delta:t.zoomDelta,duration:t.zoomDuration}))),(void 0===t.mouseWheelZoom||t.mouseWheelZoom)&&e.push(new tM({onFocusOnly:t.onFocusOnly,duration:t.zoomDuration})),(void 0===t.shiftDragZoom||t.shiftDragZoom)&&e.push(new ty({duration:t.zoomDuration})),e}({onFocusOnly:!0})),this.overlays_=e.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new T(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(y,this.handleLayerGroupChanged_),this.addChangeListener(x,this.handleViewChanged_),this.addChangeListener(b,this.handleSizeChanged_),this.addChangeListener(C,this.handleTargetChanged_),this.setProperties(e.values);const i=this;!t.view||t.view instanceof I.Ay||t.view.then(function(t){i.setView(new I.Ay(t))}),this.controls.addEventListener("add",t=>{t.element.setMap(this)}),this.controls.addEventListener(r,t=>{t.element.setMap(null)}),this.interactions.addEventListener("add",t=>{t.element.setMap(this)}),this.interactions.addEventListener(r,t=>{t.element.setMap(null)}),this.overlays_.addEventListener("add",t=>{this.addOverlayInternal_(t.element)}),this.overlays_.addEventListener(r,t=>{let e=t.element.getId();void 0!==e&&delete this.overlayIdIndex_[e.toString()],t.element.setMap(null)}),this.controls.forEach(t=>{t.setMap(this)}),this.interactions.forEach(t=>{t.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(t){this.getControls().push(t)}addInteraction(t){this.getInteractions().push(t)}addLayer(t){this.getLayerGroup().getLayers().push(t)}handleLayerAdd_(t){!function t(e,i){if(e instanceof tD.A)return void e.setMapInternal(i);if(e instanceof tF){let r=e.getLayers().getArray();for(let e=0,n=r.length;e<n;++e)t(r[e],i)}}(t.layer,this)}addOverlay(t){this.getOverlays().push(t)}addOverlayInternal_(t){let e=t.getId();void 0!==e&&(this.overlayIdIndex_[e.toString()]=t),t.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_?.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(t,e,i){if(!this.frameState_||!this.renderer_)return;let r=this.getCoordinateFromPixelInternal(t),n=void 0!==(i=void 0!==i?i:{}).hitTolerance?i.hitTolerance:0,o=void 0!==i.layerFilter?i.layerFilter:K.rT,s=!1!==i.checkWrapped;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,n,s,e,null,o,null)}getFeaturesAtPixel(t,e){let i=[];return this.forEachFeatureAtPixel(t,function(t){i.push(t)},e),i}getAllLayers(){let t=[];return!function e(i){i.forEach(function(i){i instanceof tF?e(i.getLayers()):t.push(i)})}(this.getLayers()),t}hasFeatureAtPixel(t,e){if(!this.frameState_||!this.renderer_)return!1;let i=this.getCoordinateFromPixelInternal(t),r=void 0!==(e=void 0!==e?e:{}).layerFilter?e.layerFilter:K.rT,n=void 0!==e.hitTolerance?e.hitTolerance:0,o=!1!==e.checkWrapped;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,n,o,r,null)}getEventCoordinate(t){return this.getCoordinateFromPixel(this.getEventPixel(t))}getEventCoordinateInternal(t){return this.getCoordinateFromPixelInternal(this.getEventPixel(t))}getEventPixel(t){let e=this.viewport_.getBoundingClientRect(),i=this.getSize(),r=e.width/i[0],n=e.height/i[1],o="changedTouches"in t?t.changedTouches[0]:t;return[(o.clientX-e.left)/r,(o.clientY-e.top)/n]}getTarget(){return this.get(C)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(t){return(0,t$.te)(this.getCoordinateFromPixelInternal(t),this.getView().getProjection())}getCoordinateFromPixelInternal(t){let e=this.frameState_;return e?(0,iy.Bb)(e.pixelToCoordinateTransform,t.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(t){let e=this.overlayIdIndex_[t.toString()];return void 0!==e?e:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(y)}setLayers(t){let e=this.getLayerGroup();if(t instanceof l)return void e.setLayers(t);let i=e.getLayers();i.clear(),i.extend(t)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){let t=this.getLayerGroup().getLayerStatesArray();for(let e=0,i=t.length;e<i;++e){let i=t[e];if(!i.visible)continue;let r=i.layer.getRenderer();if(r&&!r.ready)return!0;let n=i.layer.getSource();if(n&&n.loading)return!0}return!1}getPixelFromCoordinate(t){let e=(0,t$.Ad)(t,this.getView().getProjection());return this.getPixelFromCoordinateInternal(e)}getPixelFromCoordinateInternal(t){let e=this.frameState_;return e?(0,iy.Bb)(e.coordinateToPixelTransform,t.slice(0,2)):null}getPixelRatio(){return this.pixelRatio_}setPixelRatio(t){this.pixelRatio_!==t&&(this.pixelRatio_=t,this.render())}getRenderer(){return this.renderer_}getSize(){return this.get(b)}getView(){return this.get(x)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){let t=this.getTargetElement();return t?t.ownerDocument:document}getTilePriority(t,e,i,r){return function(t,e,i,r,n){if(!t||!(i in t.wantedTiles)||!t.wantedTiles[i][e.getKey()])return R;let o=t.viewState.center,s=r[0]-o[0],a=r[1]-o[1];return 65536*Math.log(n)+Math.sqrt(s*s+a*a)/n}(this.frameState_,t,e,i,r)}handleBrowserEvent(t,e){let i=new c(e=e||t.type,this,t);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(t){if(!this.frameState_)return;let e=t.originalEvent,i=e.type;if(i===v.A.POINTERDOWN||i===u.A.WHEEL||i===u.A.KEYDOWN){let t=this.getOwnerDocument(),i=this.viewport_.getRootNode?this.viewport_.getRootNode():t,r=e.target,n=i instanceof ShadowRoot?i.host===r?i.host.ownerDocument:i:i===t?t.documentElement:i;if(this.overlayContainerStopEvent_.contains(r)||!n.contains(r))return}if(t.frameState=this.frameState_,!1!==this.dispatchEvent(t)){let e=this.getInteractions().getArray().slice();for(let i=e.length-1;i>=0;i--){let r=e[i];if(r.getMap()===this&&r.getActive()&&this.getTargetElement()&&(!r.handleEvent(t)||t.propagationStopped))break}}}handlePostRender(){let t=this.frameState_,e=this.tileQueue_;if(!e.isEmpty()){let i=this.maxTilesLoading_,r=i,n=t?t.viewHints:void 0,o=!!n&&(n[P.A.ANIMATING]||n[P.A.INTERACTING]);if(o){let e=Date.now()-t.time>8;i=8*!e,r=2*!e}e.getTilesLoading()<i&&(o&&e.reprioritize(),e.loadMoreTiles(i,r))}t&&this.renderer_&&!t.animate&&(this.renderComplete_?(this.hasListener(tN.A.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(tN.A.RENDERCOMPLETE,t),!1===this.loaded_&&(this.loaded_=!0,this.dispatchEvent(new d(w.A.LOADEND,this,t)))):!0===this.loaded_&&(this.loaded_=!1,this.dispatchEvent(new d(w.A.LOADSTART,this,t))));let i=this.postRenderFunctions_;if(t)for(let e=0,r=i.length;e<r;++e)i[e](this,t);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let t=0,e=this.targetChangeHandlerKeys_.length;t<e;++t)(0,p.JH)(this.targetChangeHandlerKeys_[t]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(u.A.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(u.A.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,this.viewport_.remove()}if(this.targetElement_&&!(0,V.rB)(this.targetElement_)){this.resizeObserver_?.unobserve(this.targetElement_);let t=this.targetElement_.getRootNode();t instanceof ShadowRoot&&this.resizeObserver_.unobserve(t.host),this.setSize(void 0)}let t=this.getTarget(),e="string"==typeof t?document.getElementById(t):t;if(this.targetElement_=e,e){if((0,V.rB)(e)||e.appendChild(this.viewport_),this.renderer_||(this.renderer_=new iE(this)),!(0,V.rB)(e)){let t;for(let t in this.mapBrowserEventHandler_=new _(this,this.moveTolerance_),g)this.mapBrowserEventHandler_.addEventListener(g[t],this.handleMapBrowserEvent.bind(this));if(this.viewport_.addEventListener(u.A.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(u.A.WHEEL,this.boundHandleBrowserEvent_,!!f.FT&&{passive:!1}),this.keyboardEventTarget_)t=this.keyboardEventTarget_;else{let i=e.getRootNode();t=i instanceof ShadowRoot?i.host:e}if(this.targetChangeHandlerKeys_=[(0,p.KT)(t,u.A.KEYDOWN,this.handleBrowserEvent,this),(0,p.KT)(t,u.A.KEYPRESS,this.handleBrowserEvent,this)],e instanceof HTMLElement){let t=e.getRootNode();t instanceof ShadowRoot&&this.resizeObserver_.observe(t.host),this.resizeObserver_?.observe(e)}}this.updateSize()}else this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0)}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&((0,p.JH)(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&((0,p.JH)(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);let t=this.getView();t&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=(0,p.KT)(t,E.A.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=(0,p.KT)(t,u.A.CHANGE,this.handleViewPropertyChanged_,this),t.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(p.JH),this.layerGroupPropertyListenerKeys_=null);let t=this.getLayerGroup();t&&(this.handleLayerAdd_(new tk("addlayer",t)),this.layerGroupPropertyListenerKeys_=[(0,p.KT)(t,E.A.PROPERTYCHANGE,this.render,this),(0,p.KT)(t,u.A.CHANGE,this.render,this),(0,p.KT)(t,"addlayer",this.handleLayerAdd_,this),(0,p.KT)(t,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){if(!this.frameState_)return;let t=this.frameState_.layerStatesArray;for(let e=0,i=t.length;e<i;++e){let i=t[e].layer;i.hasRenderer()&&i.getRenderer().handleFontsChanged()}}render(){this.renderer_&&void 0===this.animationDelayKey_&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(t){return this.getControls().remove(t)}removeInteraction(t){return this.getInteractions().remove(t)}removeLayer(t){return this.getLayerGroup().getLayers().remove(t)}handleLayerRemove_(t){!function t(e){e instanceof tD.A?e.setMapInternal(null):e instanceof tF&&e.getLayers().forEach(t)}(t.layer)}removeOverlay(t){return this.getOverlays().remove(t)}renderFrame_(t){let e=this.getSize(),i=this.getView(),r=this.frameState_,n=null;if(void 0!==e&&(0,t0.Ie)(e)&&i&&i.isDef()){let r=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),o=i.getState();if(n={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:(0,q.Bg)(o.center,o.resolution,o.rotation,e),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:e,tileQueue:this.tileQueue_,time:t,usedTiles:{},viewState:o,viewHints:r,wantedTiles:{},mapId:(0,tT.v6)(this),renderTargets:{}},o.nextCenter&&o.nextResolution){let t=isNaN(o.nextRotation)?o.rotation:o.nextRotation;n.nextExtent=(0,q.Bg)(o.nextCenter,o.nextResolution,t,e)}}this.frameState_=n,this.renderer_.renderFrame(n),n&&(n.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,n.postRenderFunctions),r&&(this.previousExtent_&&((0,q.Im)(this.previousExtent_)||(0,q.aI)(n.extent,this.previousExtent_))||(this.dispatchEvent(new d(w.A.MOVESTART,this,r)),this.previousExtent_=(0,q.aZ)(this.previousExtent_))),!this.previousExtent_||n.viewHints[P.A.ANIMATING]||n.viewHints[P.A.INTERACTING]||(0,q.aI)(n.extent,this.previousExtent_)||(this.dispatchEvent(new d(w.A.MOVEEND,this,n)),(0,q.o8)(n.extent,this.previousExtent_))),this.dispatchEvent(new d(w.A.POSTRENDER,this,n)),this.renderComplete_=(this.hasListener(w.A.LOADSTART)||this.hasListener(w.A.LOADEND)||this.hasListener(tN.A.RENDERCOMPLETE))&&!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady(),this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(t){let e=this.getLayerGroup();e&&this.handleLayerRemove_(new tk("removelayer",e)),this.set(y,t)}setSize(t){this.set(b,t)}setTarget(t){this.set(C,t)}setView(t){if(!t||t instanceof I.Ay)return void this.set(x,t);this.set(x,new I.Ay);let e=this;t.then(function(t){e.setView(new I.Ay(t))})}updateSize(){let t,e=this.getTargetElement();if(e){let i,r;if((0,V.rB)(e)){let t=e.getContext("2d").getTransform();i=e.width/t.a,r=e.height/t.d}else{let t=getComputedStyle(e);i=e.offsetWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)-parseFloat(t.borderRightWidth),r=e.offsetHeight-parseFloat(t.borderTopWidth)-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)-parseFloat(t.borderBottomWidth)}!isNaN(i)&&!isNaN(r)&&(t=[Math.max(0,i),Math.max(0,r)],!(0,t0.Ie)(t)&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&(0,k.R8)("No map visible because the map container's width or height are 0."))}let i=this.getSize();!t||i&&(0,O.aI)(t,i)||(this.updateViewportSize_(t),this.setSize(t))}updateViewportSize_(t){let e=this.getView();e&&e.setViewportSize(t)}}let iL=iA},9016(t,e,i){i.d(e,{},{A:{POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"}})},8933(t,e,i){var r=i(361),n=i(5231),o=i(7736),s=i(8509),a=i(2298);class l extends o.Ay{constructor(t,e,i){super(t),this.key=e,this.oldValue=i}}class h extends n.A{constructor(t){super(),this.on,this.once,this.un,(0,a.v6)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let i;i=`change:${t}`,this.hasListener(i)&&this.dispatchEvent(new l(i,t,e)),i=r.A.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new l(i,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,i){let r=this.values_||(this.values_={});if(i)r[t]=e;else{let i=r[t];r[t]=e,i!==e&&this.notify(t,i)}}setProperties(t,e){for(let i in t)this.set(i,t[i],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){let i=this.values_[t];delete this.values_[t],(0,s.p)(this.values_)&&(this.values_=null),e||this.notify(t,i)}}}i.d(e,{},{A:h})},361(t,e,i){i.d(e,{},{A:{PROPERTYCHANGE:"propertychange"}})},5231(t,e,i){var r=i(8291),n=i(1280),o=i(3811);class s extends o.A{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(n.A.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){let i=t.length,n=Array(i);for(let o=0;o<i;++o)n[o]=(0,r.KT)(this,t[o],e);return n}return(0,r.KT)(this,t,e)}onceInternal(t,e){let i;if(Array.isArray(t)){let n=t.length;i=Array(n);for(let o=0;o<n;++o)i[o]=(0,r.Jz)(this,t[o],e)}else i=(0,r.Jz)(this,t,e);return e.ol_key=i,i}unInternal(t,e){let i=e.ol_key;if(i){var n=i;if(Array.isArray(n))for(let t=0,e=n.length;t<e;++t)(0,r.JH)(n[t]);else(0,r.JH)(n)}else if(Array.isArray(t))for(let i=0,r=t.length;i<r;++i)this.removeEventListener(t[i],e);else this.removeEventListener(t,e)}}s.prototype.on,s.prototype.once,s.prototype.un,i.d(e,{},{A:s})},3120(t,e,i){var r=i(9016),n=i(8933),o=i(2535),s=i(7344),a=i(8291),l=i(7862);let h="element",d="offset",c="position",u="positioning";class g extends n.A{constructor(t){super(),this.on,this.once,this.un,this.options=t,this.id=t.id,this.insertFirst=void 0===t.insertFirst||t.insertFirst,this.stopEvent=void 0===t.stopEvent||t.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==t.className?t.className:"ol-overlay-container "+o.Q5,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=!0===t.autoPan?{}:t.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(h,this.handleElementChanged),this.addChangeListener("map",this.handleMapChanged),this.addChangeListener(d,this.handleOffsetChanged),this.addChangeListener(c,this.handlePositionChanged),this.addChangeListener(u,this.handlePositioningChanged),void 0!==t.element&&this.setElement(t.element),this.setOffset(void 0!==t.offset?t.offset:[0,0]),this.setPositioning(t.positioning||"top-left"),void 0!==t.position&&this.setPosition(t.position)}getElement(){return this.get(h)}getId(){return this.id}getMap(){return this.get("map")||null}getOffset(){return this.get(d)}getPosition(){return this.get(c)}getPositioning(){return this.get(u)}handleElementChanged(){(0,s.gS)(this.element);let t=this.getElement();t&&this.element.appendChild(t)}handleMapChanged(){this.mapPostrenderListenerKey&&(this.element?.remove(),(0,a.JH)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);let t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,a.KT)(t,r.A.POSTRENDER,this.render,this),this.updatePixelPosition();let e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(t){this.set(h,t)}setMap(t){this.set("map",t)}setOffset(t){this.set(d,t)}setPosition(t){this.set(c,t)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(t){let e=this.getMap();if(!e||!e.getTargetElement()||!this.get(c))return;let i=this.getRect(e.getTargetElement(),e.getSize()),r=this.getElement(),n=this.getRect(r,[(0,s.Gq)(r),(0,s.DK)(r)]),o=void 0===(t=t||{}).margin?20:t.margin;if(!(0,l.ms)(i,n)){let r=n[0]-i[0],s=i[2]-n[2],a=n[1]-i[1],l=i[3]-n[3],h=[0,0];if(r<0?h[0]=r-o:s<0&&(h[0]=Math.abs(s)+o),a<0?h[1]=a-o:l<0&&(h[1]=Math.abs(l)+o),0!==h[0]||0!==h[1]){let i=e.getView().getCenterInternal(),r=e.getPixelFromCoordinateInternal(i);if(!r)return;let n=[r[0]+h[0],r[1]+h[1]],o=t.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(n),duration:o.duration,easing:o.easing})}}}getRect(t,e){let i=t.getBoundingClientRect(),r=i.left+window.pageXOffset,n=i.top+window.pageYOffset;return[r,n,r+e[0],n+e[1]]}setPositioning(t){this.set(u,t)}setVisible(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)}updatePixelPosition(){let t=this.getMap(),e=this.getPosition();if(!t||!t.isRendered()||!e)return void this.setVisible(!1);let i=t.getPixelFromCoordinate(e),r=t.getSize();this.updateRenderedPosition(i,r)}updateRenderedPosition(t,e){let i=this.element.style,r=this.getOffset(),n=this.getPositioning();this.setVisible(!0);let o=`${t[0]+r[0]}px`,s=`${t[1]+r[1]}px`,a="0%",l="0%";"bottom-right"==n||"center-right"==n||"top-right"==n?a="-100%":("bottom-center"==n||"center-center"==n||"top-center"==n)&&(a="-50%"),"bottom-left"==n||"bottom-center"==n||"bottom-right"==n?l="-100%":("center-left"==n||"center-center"==n||"center-right"==n)&&(l="-50%");let h=`translate(${a}, ${l}) translate(${o}, ${s})`;this.rendered.transform_!=h&&(this.rendered.transform_=h,i.transform=h)}getOptions(){return this.options}}i.d(e,{},{A:g})},6410(t,e,i){var r=i(9925),n=i(9599),o=i(1280),s=i(3811),a=i(2298);class l extends s.A{constructor(t,e,i){super(),i=i||{},this.tileCoord=t,this.state=e,this.key="",this.transition_=void 0===i.transition?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(o.A.CHANGE)}release(){this.setState(r.A.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==r.A.EMPTY){if(this.state!==r.A.ERROR&&this.state>t)throw Error("Tile load sequence violation");this.state=t,this.changed()}}load(){(0,a.b0)()}getAlpha(t,e){if(!this.transition_)return 1;let i=this.transitionStarts_[t];if(i){if(-1===i)return 1}else i=e,this.transitionStarts_[t]=i;let r=e-i+1e3/60;return r>=this.transition_?1:(0,n.a6)(r/this.transition_)}inTransition(t){return!!this.transition_&&-1!==this.transitionStarts_[t]}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}disposeInternal(){this.release(),super.disposeInternal()}}i.d(e,{},{A:l})},8137(t,e,i){class r{constructor(t,e,i,r){this.minX=t,this.maxX=e,this.minY=i,this.maxY=r}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}}function n(t,e,i,n,o){return void 0!==o?(o.minX=t,o.maxX=e,o.minY=i,o.maxY=n,o):new r(t,e,i,n)}i.d(e,{N:()=>n},{A:r})},9925(t,e,i){i.d(e,{},{A:{IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}})},1688(t,e,i){i.d(e,{Ay:()=>E});var r=i(8933),n=i(4754);let o={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"};var s=i(5609),a=i(4287),l=i(76);function h(t,e,i){return function(r,n,o,s,a){if(!r)return;if(!n&&!e)return r;let h=e?0:o[0]*n,d=e?0:o[1]*n,c=a?a[0]:0,u=a?a[1]:0,g=t[0]+h/2+c,p=t[2]-h/2+c,m=t[1]+d/2+u,f=t[3]-d/2+u;g>p&&(p=g=(p+g)/2),m>f&&(f=m=(f+m)/2);let v=(0,l.qE)(r[0],g,p),_=(0,l.qE)(r[1],m,f);if(s&&i&&n){let t=30*n;v+=-t*Math.log(1+Math.max(0,g-r[0])/t)+t*Math.log(1+Math.max(0,r[0]-p)/t),_+=-t*Math.log(1+Math.max(0,m-r[1])/t)+t*Math.log(1+Math.max(0,r[1]-f)/t)}return[v,_]}}function d(t){return t}var c=i(832),u=i(9599),g=i(7862),p=i(3297),m=i(3626),f=i(793);function v(t,e,i,r){let n=(0,g.RG)(e)/i[0],o=(0,g.Oq)(e)/i[1];return r?Math.min(t,Math.max(n,o)):Math.min(t,Math.min(n,o))}function _(t,e,i){let r=Math.min(t,e);return r*=Math.log(1+50*Math.max(0,t/e-1))/50+1,i&&(r=Math.max(r,i)/(Math.log(1+50*Math.max(0,i/t-1))/50+1)),(0,l.qE)(r,i/2,2*e)}function w(t,e,i,r,n){return i=void 0===i||i,function(o,s,a,h){if(void 0!==o){let s=r?v(t,r,a,n):t;return i&&h?_(o,s,e):(0,l.qE)(o,e,s)}}}var y=i(8667);class b extends r.A{constructor(t){super(),this.on,this.once,this.un,t=Object.assign({},t),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=(0,f.Av)(t.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,t.projection&&(0,f.RJ)(),t.center&&(t.center=(0,f.Ad)(t.center,this.projection_)),t.extent&&(t.extent=(0,f.SD)(t.extent,this.projection_)),this.applyOptions_(t)}applyOptions_(t){let e=Object.assign({},t);for(let t in o)delete e[t];this.setProperties(e,!0);let i=function(t){var e,i,r,n,o,a;let h,d,c,u=void 0!==t.minZoom?t.minZoom:0,p=void 0!==t.maxZoom?t.maxZoom:28,m=void 0!==t.zoomFactor?t.zoomFactor:2,y=void 0!==t.multiWorld&&t.multiWorld,b=void 0===t.smoothResolutionConstraint||t.smoothResolutionConstraint,C=void 0!==t.showFullExtent&&t.showFullExtent,x=(0,f.Av)(t.projection,"EPSG:3857"),E=x.getExtent(),A=t.constrainOnlyCenter,L=t.extent;if(!y&&!L&&x.isGlobal()&&(A=!1,L=E),void 0!==t.resolutions){let r=t.resolutions;(d=r[u],c=void 0!==r[p]?r[p]:r[r.length-1],t.constrainResolution)?(e=b,i=!A&&L,e=void 0===e||e,h=function(t,n,o,a){if(void 0!==t){let h=r[0],d=r[r.length-1],c=i?v(h,i,o,C):h;if(a)return e?_(t,c,d):(0,l.qE)(t,d,c);let u=Math.min(c,t),g=Math.floor((0,s.FT)(r,u,n));return r[g]>c&&g<r.length-1?r[g+1]:r[g]}}):h=w(d,c,b,!A&&L,C)}else{let e=(E?Math.max((0,g.RG)(E),(0,g.Oq)(E)):360*f.Ig.degrees/x.getMetersPerUnit())/256/1;(void 0!==(d=t.maxResolution)?u=0:d=e/Math.pow(m,u),void 0===(c=t.minResolution)&&(c=void 0!==t.maxZoom?void 0!==t.maxResolution?d/Math.pow(m,p):e/Math.pow(m,p):e/0x10000000),p=u+Math.floor(Math.log(d/c)/Math.log(m)),c=d/Math.pow(m,p-u),t.constrainResolution)?(r=d,n=c,o=b,a=!A&&L,o=void 0===o||o,n=void 0!==n?n:0,h=function(t,e,i,s){if(void 0!==t){let h=a?v(r,a,i,C):r;if(s)return o?_(t,h,n):(0,l.qE)(t,n,h);let d=Math.max(Math.ceil(Math.log(r/h)/Math.log(m)-1e-9),Math.floor(Math.log(r/Math.min(h,t))/Math.log(m)+(-(.499999999*e)+.5))),c=r/Math.pow(m,d);return(0,l.qE)(c,n,h)}}):h=w(d,c,b,!A&&L,C)}return{constraint:h,maxResolution:d,minResolution:c,minZoom:u,zoomFactor:m}}(t);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=i.minZoom;let r=function(t){if(void 0!==t.extent){let e=void 0===t.smoothExtentConstraint||t.smoothExtentConstraint;return h(t.extent,t.constrainOnlyCenter,e)}let e=(0,f.Av)(t.projection,"EPSG:3857");if(!0!==t.multiWorld&&e.isGlobal()){let t=e.getExtent().slice();return t[0]=-1/0,t[2]=1/0,h(t,!1,!1)}return d}(t),n=i.constraint,a=function(t){if(void 0===t.enableRotation||t.enableRotation){let e=t.constrainRotation;return void 0===e||!0===e?(0,y.cq)():!1===e?y.dv:"number"==typeof e?(0,y.a$)(e):y.dv}return y.b8}(t);this.constraints_={center:r,resolution:n,rotation:a},this.setRotation(void 0!==t.rotation?t.rotation:0),this.setCenterInternal(void 0!==t.center?t.center:null),void 0!==t.resolution?this.setResolution(t.resolution):void 0!==t.zoom&&this.setZoom(t.zoom)}get padding(){return this.padding_}set padding(t){let e=this.padding_;this.padding_=t;let i=this.getCenterInternal();if(i){let r=t||[0,0,0,0];e=e||[0,0,0,0];let n=this.getResolution(),o=n/2*(r[3]-e[3]+e[1]-r[1]),s=n/2*(r[0]-e[0]+e[2]-r[2]);this.setCenterInternal([i[0]+o,i[1]-s])}}getUpdatedOptions_(t){let e=this.getProperties();return void 0!==e.resolution?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object.assign({},e,t)}animate(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);let e=Array(arguments.length);for(let t=0;t<e.length;++t){let i=arguments[t];i.center&&((i=Object.assign({},i)).center=(0,f.Ad)(i.center,this.getProjection())),i.anchor&&((i=Object.assign({},i)).anchor=(0,f.Ad)(i.anchor,this.getProjection())),e[t]=i}this.animateInternal.apply(this,e)}animateInternal(t){let e,i=arguments.length;i>1&&"function"==typeof arguments[i-1]&&(e=arguments[i-1],--i);let r=0;for(;r<i&&!this.isDef();++r){let t=arguments[r];t.center&&this.setCenterInternal(t.center),void 0!==t.zoom?this.setZoom(t.zoom):t.resolution&&this.setResolution(t.resolution),void 0!==t.rotation&&this.setRotation(t.rotation)}if(r===i){e&&C(e,!0);return}let o=Date.now(),s=this.targetCenter_.slice(),a=this.targetResolution_,h=this.targetRotation_,d=[];for(;r<i;++r){var g;let t=arguments[r],i={start:o,complete:!1,anchor:t.anchor,duration:void 0!==t.duration?t.duration:1e3,easing:t.easing||u.T9,callback:e};if(t.center&&(i.sourceCenter=s,i.targetCenter=t.center.slice(),s=i.targetCenter),void 0!==t.zoom?(i.sourceResolution=a,i.targetResolution=this.getResolutionForZoom(t.zoom),a=i.targetResolution):t.resolution&&(i.sourceResolution=a,i.targetResolution=t.resolution,a=i.targetResolution),void 0!==t.rotation){i.sourceRotation=h;let e=(0,l.xP)(t.rotation-h+Math.PI,2*Math.PI)-Math.PI;i.targetRotation=h+e,h=i.targetRotation}(!(g=i).sourceCenter||!g.targetCenter||(0,c.aI)(g.sourceCenter,g.targetCenter))&&g.sourceResolution===g.targetResolution&&g.sourceRotation===g.targetRotation?i.complete=!0:o+=i.duration,d.push(i)}this.animations_.push(d),this.setHint(n.A.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[n.A.ANIMATING]>0}getInteracting(){return this.hints_[n.A.INTERACTING]>0}cancelAnimations(){let t;this.setHint(n.A.ANIMATING,-this.hints_[n.A.ANIMATING]);for(let e=0,i=this.animations_.length;e<i;++e){let i=this.animations_[e];if(i[0].callback&&C(i[0].callback,!1),!t)for(let e=0,r=i.length;e<r;++e){let r=i[e];if(!r.complete){t=r.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(void 0!==this.updateAnimationKey_&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;let t=Date.now(),e=!1;for(let i=this.animations_.length-1;i>=0;--i){let r=this.animations_[i],o=!0;for(let i=0,n=r.length;i<n;++i){let n=r[i];if(n.complete)continue;let s=t-n.start,a=n.duration>0?s/n.duration:1;a>=1?(n.complete=!0,a=1):o=!1;let h=n.easing(a);if(n.sourceCenter){let t=n.sourceCenter[0],e=n.sourceCenter[1],i=n.targetCenter[0],r=n.targetCenter[1];this.nextCenter_=n.targetCenter;let o=t+h*(i-t),s=e+h*(r-e);this.targetCenter_=[o,s]}if(n.sourceResolution&&n.targetResolution){let t=1===h?n.targetResolution:n.sourceResolution+h*(n.targetResolution-n.sourceResolution);if(n.anchor){let e=this.getViewportSize_(this.getRotation()),i=this.constraints_.resolution(t,0,e,!0);this.targetCenter_=this.calculateCenterZoom(i,n.anchor)}this.nextResolution_=n.targetResolution,this.targetResolution_=t,this.applyTargetState_(!0)}if(void 0!==n.sourceRotation&&void 0!==n.targetRotation){let t=1===h?(0,l.xP)(n.targetRotation+Math.PI,2*Math.PI)-Math.PI:n.sourceRotation+h*(n.targetRotation-n.sourceRotation);if(n.anchor){let e=this.constraints_.rotation(t,!0);this.targetCenter_=this.calculateCenterRotate(e,n.anchor)}this.nextRotation_=n.targetRotation,this.targetRotation_=t}if(this.applyTargetState_(!0),e=!0,!n.complete)break}if(o){this.animations_[i]=null,this.setHint(n.A.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;let t=r[0].callback;t&&C(t,!0)}}this.animations_=this.animations_.filter(Boolean),e&&void 0===this.updateAnimationKey_&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(t,e){let i,r=this.getCenterInternal();return void 0!==r&&(i=[r[0]-e[0],r[1]-e[1]],(0,c.e$)(i,t-this.getRotation()),(0,c.WQ)(i,e)),i}calculateCenterZoom(t,e){let i,r=this.getCenterInternal(),n=this.getResolution();return void 0!==r&&void 0!==n&&(i=[e[0]-t*(e[0]-r[0])/n,e[1]-t*(e[1]-r[1])/n]),i}getViewportSize_(t){let e=this.viewportSize_;if(t){let i=e[0],r=e[1];return[Math.abs(i*Math.cos(t))+Math.abs(r*Math.sin(t)),Math.abs(i*Math.sin(t))+Math.abs(r*Math.cos(t))]}return e}setViewportSize(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){let t=this.getCenterInternal();return t?(0,f.te)(t,this.getProjection()):t}getCenterInternal(){return this.get(o.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(t){return void 0!==t?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()}calculateExtent(t){let e=this.calculateExtentInternal(t);return(0,f.JR)(e,this.getProjection())}calculateExtentInternal(t){t=t||this.getViewportSizeMinusPadding_();let e=this.getCenterInternal();(0,a.v)(e,"The view center is not defined");let i=this.getResolution();(0,a.v)(void 0!==i,"The view resolution is not defined");let r=this.getRotation();return(0,a.v)(void 0!==r,"The view rotation is not defined"),(0,g.Bg)(e,i,r,t)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))}setConstrainResolution(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))}getProjection(){return this.projection_}getResolution(){return this.get(o.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(t,e){return this.getResolutionForExtentInternal((0,f.SD)(t,this.getProjection()),e)}getResolutionForExtentInternal(t,e){return e=e||this.getViewportSizeMinusPadding_(),Math.max((0,g.RG)(t)/e[0],(0,g.Oq)(t)/e[1])}getResolutionForValueFunction(t){t=t||2;let e=this.getConstrainedResolution(this.maxResolution_),i=Math.log(e/this.minResolution_)/Math.log(t);return function(r){return e/Math.pow(t,r*i)}}getRotation(){return this.get(o.ROTATION)}getValueForResolutionFunction(t){let e=Math.log(t||2),i=this.getConstrainedResolution(this.maxResolution_),r=Math.log(i/this.minResolution_)/e;return function(t){return Math.log(i/t)/e/r}}getViewportSizeMinusPadding_(t){let e=this.getViewportSize_(t),i=this.padding_;return i&&(e=[e[0]-i[1]-i[3],e[1]-i[0]-i[2]]),e}getState(){let t=this.getProjection(),e=this.getResolution(),i=this.getRotation(),r=this.getCenterInternal(),n=this.padding_;if(n){let t=this.getViewportSizeMinusPadding_();r=x(r,this.getViewportSize_(),[t[0]/2+n[3],t[1]/2+n[0]],e,i)}return{center:r.slice(0),projection:void 0!==t?t:null,resolution:e,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let t,e=this.getResolution();return void 0!==e&&(t=this.getZoomForResolution(e)),t}getZoomForResolution(t){let e,i,r=this.minZoom_||0;if(this.resolutions_){let n=(0,s.FT)(this.resolutions_,t,1);r=n,e=this.resolutions_[n],i=n==this.resolutions_.length-1?2:e/this.resolutions_[n+1]}else e=this.maxResolution_,i=this.zoomFactor_;return r+Math.log(e/t)/Math.log(i)}getResolutionForZoom(t){if(this.resolutions_?.length){if(1===this.resolutions_.length)return this.resolutions_[0];let e=(0,l.qE)(Math.floor(t),0,this.resolutions_.length-2),i=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(i,(0,l.qE)(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)}fit(t,e){let i;if((0,a.v)(Array.isArray(t)||"function"==typeof t.getSimplifiedGeometry,"Invalid extent or geometry provided as `geometry`"),Array.isArray(t)){(0,a.v)(!(0,g.Im)(t),"Cannot fit empty extent provided as `geometry`");let e=(0,f.SD)(t,this.getProjection());i=(0,m.VY)(e)}else if("Circle"===t.getType()){let e=(0,f.SD)(t.getExtent(),this.getProjection());(i=(0,m.VY)(e)).rotate(this.getRotation(),(0,g.q1)(e))}else{let e=(0,f.Tf)();i=e?t.clone().transform(e,this.getProjection()):t}this.fitInternal(i,e)}rotatedExtentForGeometry(t){let e=this.getRotation(),i=Math.cos(e),r=Math.sin(-e),n=t.getFlatCoordinates(),o=t.getStride(),s=Infinity,a=Infinity,l=-1/0,h=-1/0;for(let t=0,e=n.length;t<e;t+=o){let e=n[t]*i-n[t+1]*r,o=n[t]*r+n[t+1]*i;s=Math.min(s,e),a=Math.min(a,o),l=Math.max(l,e),h=Math.max(h,o)}return[s,a,l,h]}fitInternal(t,e){let i,r=(e=e||{}).size;r||(r=this.getViewportSizeMinusPadding_());let n=void 0!==e.padding?e.padding:[0,0,0,0],o=void 0!==e.nearest&&e.nearest;i=void 0!==e.minResolution?e.minResolution:void 0!==e.maxZoom?this.getResolutionForZoom(e.maxZoom):0;let s=this.rotatedExtentForGeometry(t),a=this.getResolutionForExtentInternal(s,[r[0]-n[1]-n[3],r[1]-n[0]-n[2]]);a=isNaN(a)?i:Math.max(a,i),a=this.getConstrainedResolution(a,+!o);let l=this.getRotation(),h=Math.sin(l),d=Math.cos(l),c=(0,g.q1)(s);c[0]+=(n[1]-n[3])/2*a,c[1]+=(n[0]-n[2])/2*a;let u=c[0]*d-c[1]*h,m=c[1]*d+c[0]*h,f=this.getConstrainedCenter([u,m],a),v=e.callback?e.callback:p.tV;void 0!==e.duration?this.animateInternal({resolution:a,center:f,duration:e.duration,easing:e.easing},v):(this.targetResolution_=a,this.targetCenter_=f,this.applyTargetState_(!1,!0),C(v,!0))}centerOn(t,e,i){this.centerOnInternal((0,f.Ad)(t,this.getProjection()),e,i)}centerOnInternal(t,e,i){this.setCenterInternal(x(t,e,i,this.getResolution(),this.getRotation()))}calculateCenterShift(t,e,i,r){let n,o=this.padding_;if(o&&t){let s=this.getViewportSizeMinusPadding_(-i),a=x(t,r,[s[0]/2+o[3],s[1]/2+o[0]],e,i);n=[t[0]-a[0],t[1]-a[1]]}return n}isDef(){return!!this.getCenterInternal()&&void 0!==this.getResolution()}adjustCenter(t){let e=(0,f.te)(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])}adjustCenterInternal(t){let e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])}adjustResolution(t,e){e=e&&(0,f.Ad)(e,this.getProjection()),this.adjustResolutionInternal(t,e)}adjustResolutionInternal(t,e){let i=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),n=this.constraints_.resolution(this.targetResolution_*t,0,r,i);e&&(this.targetCenter_=this.calculateCenterZoom(n,e)),this.targetResolution_*=t,this.applyTargetState_()}adjustZoom(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)}adjustRotation(t,e){e&&(e=(0,f.Ad)(e,this.getProjection())),this.adjustRotationInternal(t,e)}adjustRotationInternal(t,e){let i=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+t,i);e&&(this.targetCenter_=this.calculateCenterRotate(r,e)),this.targetRotation_+=t,this.applyTargetState_()}setCenter(t){this.setCenterInternal(t?(0,f.Ad)(t,this.getProjection()):t)}setCenterInternal(t){this.targetCenter_=t,this.applyTargetState_()}setHint(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]}setResolution(t){this.targetResolution_=t,this.applyTargetState_()}setRotation(t){this.targetRotation_=t,this.applyTargetState_()}setZoom(t){this.setResolution(this.getResolutionForZoom(t))}applyTargetState_(t,e){let i=this.getAnimating()||this.getInteracting()||e,r=this.constraints_.rotation(this.targetRotation_,i),n=this.getViewportSize_(r),s=this.constraints_.resolution(this.targetResolution_,0,n,i),a=this.constraints_.center(this.targetCenter_,s,n,i,this.calculateCenterShift(this.targetCenter_,s,r,n));this.get(o.ROTATION)!==r&&this.set(o.ROTATION,r),this.get(o.RESOLUTION)!==s&&(this.set(o.RESOLUTION,s),this.set("zoom",this.getZoom(),!0)),a&&this.get(o.CENTER)&&(0,c.aI)(this.get(o.CENTER),a)||this.set(o.CENTER,a),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(t,e,i){t=void 0!==t?t:200;let r=this.constraints_.rotation(this.targetRotation_),n=this.getViewportSize_(r),o=this.constraints_.resolution(this.targetResolution_,e||0,n),s=this.constraints_.center(this.targetCenter_,o,n,!1,this.calculateCenterShift(this.targetCenter_,o,r,n));if(0===t&&!this.cancelAnchor_){this.targetResolution_=o,this.targetRotation_=r,this.targetCenter_=s,this.applyTargetState_();return}i=i||(0===t?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,this.getResolution()===o&&this.getRotation()===r&&this.getCenterInternal()&&(0,c.aI)(this.getCenterInternal(),s)||(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:s,resolution:o,duration:t,easing:u.vT,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(n.A.INTERACTING,1)}endInteraction(t,e,i){i=i&&(0,f.Ad)(i,this.getProjection()),this.endInteractionInternal(t,e,i)}endInteractionInternal(t,e,i){this.getInteracting()&&(this.setHint(n.A.INTERACTING,-1),this.resolveConstraints(t,e,i))}getConstrainedCenter(t,e){let i=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),i)}getConstrainedZoom(t,e){let i=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(i,e))}getConstrainedResolution(t,e){e=e||0;let i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,e,i)}}function C(t,e){setTimeout(function(){t(e)},0)}function x(t,e,i,r,n){let o=Math.cos(-n),s=Math.sin(-n),a=t[0]*o-t[1]*s,l=t[1]*o+t[0]*s;return a+=(e[0]/2-i[0])*r,[a*o-(l+=(i[1]-e[1]/2)*r)*(s=-s),l*o+a*s]}let E=b},4754(t,e,i){i.d(e,{},{A:{ANIMATING:0,INTERACTING:1}})},5609(t,e,i){function r(t,e){return t>e?1:t<e?-1:0}function n(t,e,i){if(t[0]<=e)return 0;let r=t.length;if(e<=t[r-1])return r-1;if("function"==typeof i){for(let n=1;n<r;++n){let r=t[n];if(r===e)return n;if(r<e){if(i(e,t[n-1],r)>0)return n-1;return n}}return r-1}if(i>0){for(let i=1;i<r;++i)if(t[i]<e)return i-1;return r-1}if(i<0){for(let i=1;i<r;++i)if(t[i]<=e)return i;return r-1}for(let i=1;i<r;++i){if(t[i]==e)return i;if(t[i]<e){if(t[i-1]-e<e-t[i])return i-1;return i}}return r-1}function o(t,e){let i=Array.isArray(e)?e:[e],r=i.length;for(let e=0;e<r;e++)t[t.length]=i[e]}function s(t,e){let i=t.length;if(i!==e.length)return!1;for(let r=0;r<i;r++)if(t[r]!==e[r])return!1;return!0}function a(t,e,i){let n=e||r;return t.every(function(e,r){if(0===r)return!0;let o=n(t[r-1],e);return!(o>0||i&&0===o)})}i.d(e,{FT:()=>n,V_:()=>r,WC:()=>a,X$:()=>o,aI:()=>s})},4287(t,e,i){function r(t,e){if(!t)throw Error(e)}i.d(e,{v:()=>r})},1975(t,e,i){let r;var n=i(7344),o=i(76);let s=[NaN,NaN,NaN,0],a=/^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,l=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,h=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,d=/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;function c(t,e){return t.endsWith("%")?Number(t.substring(0,t.length-1))/e:Number(t)}function u(t){throw Error('failed to parse "'+t+'" as color')}function g(t){return"string"==typeof t?t:A(t)}let p={},m=0;function f(t){if(4===t.length)return t;let e=t.slice();return e[3]=1,e}function v(t){return t>.0031308?269.025*Math.pow(t,1/2.4)-14.025:3294.6*t}function _(t){return t>.2068965?Math.pow(t,3):108/841*(t-4/29)}function w(t){return t>10.314724?Math.pow((t+14.025)/269.025,2.4):t/3294.6}function y(t){return t>.0088564?Math.pow(t,1/3):t/(108/841)+4/29}function b(t){let e=w(t[0]),i=w(t[1]),r=w(t[2]),n=y(.222488403*e+.716873169*i+.06060791*r),o=500*(y(.452247074*e+.399439023*i+.148375274*r)-n),s=200*(n-y(.016863605*e+.117638439*i+.865350722*r)),a=180/Math.PI*Math.atan2(s,o);return[116*n-16,Math.sqrt(o*o+s*s),a<0?a+360:a,t[3]]}function C(t){let e=(t[0]+16)/116,i=t[1],r=t[2]*Math.PI/180,n=_(e),s=_(e+i/500*Math.cos(r)),a=_(e-i/200*Math.sin(r)),l=v(3.021973625*s-1.617392459*n-.404875592*a),h=v(-.943766287*s+1.916279586*n+.027607165*a),d=v(.069407491*s-.22898585*n+1.159737864*a);return[(0,o.qE)(l+.5|0,0,255),(0,o.qE)(h+.5|0,0,255),(0,o.qE)(d+.5|0,0,255),t[3]]}function x(t){if("none"===t)return s;if(p.hasOwnProperty(t))return p[t];if(m>=1024){let t=0;for(let e in p)(3&t++)==0&&(delete p[e],--m)}let e=function t(e){if(e.toLowerCase().startsWith("rgb")){let t=e.match(l)||e.match(a)||e.match(h);if(t){let e=t[4],i=100/255;return[(0,o.qE)(c(t[1],i)+.5|0,0,255),(0,o.qE)(c(t[2],i)+.5|0,0,255),(0,o.qE)(c(t[3],i)+.5|0,0,255),void 0!==e?(0,o.qE)(c(e,100),0,1):1]}u(e)}if(e.startsWith("#")){if(d.test(e)){let t=e.substring(1),i=t.length<=4?1:2,r=[0,0,0,255];for(let e=0,n=t.length;e<n;e+=i){let n=parseInt(t.substring(e,e+i),16);1===i&&(n+=n<<4),r[e/i]=n}return r[3]=r[3]/255,r}u(e)}let i=(r||(r=(0,n.Y)(1,1,void 0,{willReadFrequently:!0,desynchronized:!0})),r);i.fillStyle="#abcdef";let s=i.fillStyle;i.fillStyle=e,i.fillStyle===s&&(i.fillStyle="#fedcba",s=i.fillStyle,i.fillStyle=e,i.fillStyle===s&&u(e));let g=i.fillStyle;if(g.startsWith("#")||g.startsWith("rgba"))return t(g);i.clearRect(0,0,1,1),i.fillRect(0,0,1,1);let p=Array.from(i.getImageData(0,0,1,1).data);return p[3]=(0,o.Mg)(p[3]/255,3),p}(t);for(let i of(4!==e.length&&u(t),e))isNaN(i)&&u(t);return p[t]=e,++m,e}function E(t){return Array.isArray(t)?t:x(t)}function A(t){let e=t[0];e!=(0|e)&&(e=e+.5|0);let i=t[1];i!=(0|i)&&(i=i+.5|0);let r=t[2];return r!=(0|r)&&(r=r+.5|0),"rgba("+e+","+i+","+r+","+(void 0===t[3]?1:Math.round(1e3*t[3])/1e3)+")"}i.d(e,{_j:()=>E,cD:()=>C,dI:()=>A,eE:()=>b,fu:()=>f,oJ:()=>g,sH:()=>x},{qV:s})},717(t,e,i){function r(...t){console.warn(...t)}i.d(e,{R8:()=>r})},7967(t,e,i){var r=i(5609),n=i(2535),o=i(7344),s=i(1280),a=i(3297),l=i(7259);class h extends l.A{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=void 0===t.collapsed||t.collapsed,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=void 0!==t.collapsible,this.collapsible_=void 0===t.collapsible||t.collapsible,this.collapsible_||(this.collapsed_=!1),this.attributions_=t.attributions;const e=void 0!==t.className?t.className:"ol-attribution",i=void 0!==t.tipLabel?t.tipLabel:"Attributions",r=void 0!==t.expandClassName?t.expandClassName:e+"-expand",o=void 0!==t.collapseLabel?t.collapseLabel:"›",a=void 0!==t.collapseClassName?t.collapseClassName:e+"-collapse";"string"==typeof o?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=o,this.collapseLabel_.className=a):this.collapseLabel_=o;const l=void 0!==t.label?t.label:"i";"string"==typeof l?(this.label_=document.createElement("span"),this.label_.textContent=l,this.label_.className=r):this.label_=l;const h=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(h),this.toggleButton_.addEventListener(s.A.CLICK,this.handleClick_.bind(this),!1);const d=e+" "+n.XI+" "+n.$N+(this.collapsed_&&this.collapsible_?" "+n.nT:"")+(this.collapsible_?"":" ol-uncollapsible"),c=this.element;c.className=d,c.appendChild(this.toggleButton_),c.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(t){let e=this.getMap().getAllLayers(),i=new Set(e.flatMap(e=>e.getAttributions(t)));if(void 0!==this.attributions_&&(Array.isArray(this.attributions_)?this.attributions_.forEach(t=>i.add(t)):i.add(this.attributions_)),!this.overrideCollapsible_){let t=!e.some(t=>t.getSource()?.getAttributionsCollapsible()===!1);this.setCollapsible(t)}return Array.from(i)}async updateElement_(t){if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}let e=await Promise.all(this.collectSourceAttributions_(t).map(t=>(0,a.hq)(()=>t))),i=e.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!(0,r.aI)(e,this.renderedAttributions_)){(0,o.gS)(this.ulElement_);for(let t=0,i=e.length;t<i;++t){let i=document.createElement("li");i.innerHTML=e[t],this.ulElement_.appendChild(i)}this.renderedAttributions_=e}}handleClick_(t){t.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(n.nT),this.collapsed_?(0,o.fo)(this.collapseLabel_,this.label_):(0,o.fo)(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(t){this.userCollapsed_=t,this.collapsible_&&this.collapsed_!==t&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(t){this.updateElement_(t.frameState)}}i.d(e,{},{A:h})},7259(t,e,i){var r=i(9016),n=i(8933),o=i(8291),s=i(3297);class a extends n.A{constructor(t){super();const e=t.element;!e||t.target||e.style.pointerEvents||(e.style.pointerEvents="auto"),this.element=e||null,this.target_=null,this.map_=null,this.listenerKeys=[],t.render&&(this.render=t.render),t.target&&this.setTarget(t.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(t){this.map_&&this.element?.remove();for(let t=0,e=this.listenerKeys.length;t<e;++t)(0,o.JH)(this.listenerKeys[t]);if(this.listenerKeys.length=0,this.map_=t,t){let e=this.target_??t.getOverlayContainerStopEvent();this.element&&e.appendChild(this.element),this.render!==s.tV&&this.listenerKeys.push((0,o.KT)(t,r.A.POSTRENDER,this.render,this)),t.render()}}render(t){}setTarget(t){this.target_="string"==typeof t?document.getElementById(t):t}}i.d(e,{},{A:a})},2130(t,e,i){var r=i(832),n=i(8291),o=i(5054),s=i(793),a=i(7259);let l="projection",h="coordinateFormat";class d extends a.A{constructor(t){t=t||{};const e=document.createElement("div");e.className=void 0!==t.className?t.className:"ol-mouse-position",super({element:e,render:t.render,target:t.target}),this.on,this.once,this.un,this.addChangeListener(l,this.handleProjectionChanged_),t.coordinateFormat&&this.setCoordinateFormat(t.coordinateFormat),t.projection&&this.setProjection(t.projection),this.renderOnMouseOut_=void 0!==t.placeholder,this.placeholder_=this.renderOnMouseOut_?t.placeholder:"&#160;",this.renderedHTML_=e.innerHTML,this.mapProjection_=null,this.transform_=null,this.wrapX_=!1!==t.wrapX}handleProjectionChanged_(){this.transform_=null}getCoordinateFormat(){return this.get(h)}getProjection(){return this.get(l)}handleMouseMove(t){let e=this.getMap();this.updateHTML_(e.getEventPixel(t))}handleMouseOut(t){this.updateHTML_(null)}setMap(t){if(super.setMap(t),t){let e=t.getViewport();this.listenerKeys.push((0,n.KT)(e,o.A.POINTERMOVE,this.handleMouseMove,this)),this.renderOnMouseOut_&&this.listenerKeys.push((0,n.KT)(e,o.A.POINTEROUT,this.handleMouseOut,this)),this.updateHTML_(null)}}setCoordinateFormat(t){this.set(h,t)}setProjection(t){this.set(l,(0,s.Jt)(t))}updateHTML_(t){let e=this.placeholder_;if(t&&this.mapProjection_){if(!this.transform_){let t=this.getProjection();t?this.transform_=(0,s.FO)(this.mapProjection_,t):this.transform_=s.R6}let i=this.getMap().getCoordinateFromPixelInternal(t);if(i){let t=(0,s.Tf)();if(t&&(this.transform_=(0,s.FO)(this.mapProjection_,t)),this.transform_(i,i),this.wrapX_){let e=t||this.getProjection()||this.mapProjection_;(0,r.Li)(i,e)}let n=this.getCoordinateFormat();e=n?n(i):i.toString()}}this.renderedHTML_&&e===this.renderedHTML_||(this.element.innerHTML=e,this.renderedHTML_=e)}render(t){let e=t.frameState;e?this.mapProjection_!=e.viewState.projection&&(this.mapProjection_=e.viewState.projection,this.transform_=null):this.mapProjection_=null}}i.d(e,{},{A:d})},3115(t,e,i){var r=i(2535),n=i(9599),o=i(1280),s=i(7259);class a extends s.A{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target});const e=void 0!==t.className?t.className:"ol-zoom",i=void 0!==t.delta?t.delta:1,n=void 0!==t.zoomInClassName?t.zoomInClassName:e+"-in",s=void 0!==t.zoomOutClassName?t.zoomOutClassName:e+"-out",a=void 0!==t.zoomInLabel?t.zoomInLabel:"+",l=void 0!==t.zoomOutLabel?t.zoomOutLabel:"–",h=void 0!==t.zoomInTipLabel?t.zoomInTipLabel:"Zoom in",d=void 0!==t.zoomOutTipLabel?t.zoomOutTipLabel:"Zoom out",c=document.createElement("button");c.className=n,c.setAttribute("type","button"),c.title=h,c.appendChild("string"==typeof a?document.createTextNode(a):a),c.addEventListener(o.A.CLICK,this.handleClick_.bind(this,i),!1);const u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=d,u.appendChild("string"==typeof l?document.createTextNode(l):l),u.addEventListener(o.A.CLICK,this.handleClick_.bind(this,-i),!1);const g=e+" "+r.XI+" "+r.$N,p=this.element;p.className=g,p.appendChild(c),p.appendChild(u),this.duration_=void 0!==t.duration?t.duration:250}handleClick_(t,e){e.preventDefault(),this.zoomByDelta_(t)}zoomByDelta_(t){let e=this.getMap().getView();if(!e)return;let i=e.getZoom();if(void 0!==i){let r=e.getConstrainedZoom(i+t);this.duration_>0?(e.getAnimating()&&e.cancelAnimations(),e.animate({zoom:r,duration:this.duration_,easing:n.vT})):e.setZoom(r)}}}i.d(e,{},{A:a})},8194(t,e,i){var r=i(2535),n=i(9599),o=i(8291),s=i(7736),a=i(1280),l=i(76),h=i(5054),d=i(7259);class c extends d.A{constructor(t){super({target:(t=t||{}).target,element:document.createElement("div"),render:t.render}),this.dragListenerKeys_=[],this.currentResolution_=void 0,this.direction_=0,this.dragging_,this.heightLimit_=0,this.widthLimit_=0,this.startX_,this.startY_,this.thumbSize_=null,this.sliderInitialized_=!1,this.duration_=void 0!==t.duration?t.duration:200;const e=void 0!==t.className?t.className:"ol-zoomslider",i=document.createElement("button");i.setAttribute("type","button"),i.className=e+"-thumb "+r.XI;const n=this.element;n.className=e+" "+r.XI+" "+r.$N,n.appendChild(i),n.addEventListener(h.A.POINTERDOWN,this.handleDraggerStart_.bind(this),!1),n.addEventListener(h.A.POINTERMOVE,this.handleDraggerDrag_.bind(this),!1),n.addEventListener(h.A.POINTERUP,this.handleDraggerEnd_.bind(this),!1),n.addEventListener(a.A.CLICK,this.handleContainerClick_.bind(this),!1),i.addEventListener(a.A.CLICK,s.dG,!1)}setMap(t){super.setMap(t),t&&t.render()}initSlider_(){let t=this.element,e=t.offsetWidth,i=t.offsetHeight;if(0===e&&0===i)return this.sliderInitialized_=!1;let r=getComputedStyle(t);e-=parseFloat(r.paddingRight)+parseFloat(r.paddingLeft),i-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom);let n=t.firstElementChild,o=getComputedStyle(n),s=n.offsetWidth+parseFloat(o.marginRight)+parseFloat(o.marginLeft),a=n.offsetHeight+parseFloat(o.marginTop)+parseFloat(o.marginBottom);return this.thumbSize_=[s,a],e>i?(this.direction_=1,this.widthLimit_=e-s):(this.direction_=0,this.heightLimit_=i-a),this.sliderInitialized_=!0}handleContainerClick_(t){let e=this.getMap().getView(),i=this.getRelativePosition_(t.offsetX-this.thumbSize_[0]/2,t.offsetY-this.thumbSize_[1]/2),r=this.getResolutionForPosition_(i),o=e.getConstrainedZoom(e.getZoomForResolution(r));e.animateInternal({zoom:o,duration:this.duration_,easing:n.vT})}handleDraggerStart_(t){if(!this.dragging_&&t.target===this.element.firstElementChild){let e=this.element.firstElementChild;if(this.getMap().getView().beginInteraction(),this.startX_=t.clientX-parseFloat(e.style.left),this.startY_=t.clientY-parseFloat(e.style.top),this.dragging_=!0,0===this.dragListenerKeys_.length){let t=this.handleDraggerDrag_,e=this.handleDraggerEnd_,i=this.getMap().getOwnerDocument();this.dragListenerKeys_.push((0,o.KT)(i,h.A.POINTERMOVE,t,this),(0,o.KT)(i,h.A.POINTERUP,e,this))}}}handleDraggerDrag_(t){if(this.dragging_){let e=t.clientX-this.startX_,i=t.clientY-this.startY_,r=this.getRelativePosition_(e,i);this.currentResolution_=this.getResolutionForPosition_(r),this.getMap().getView().setResolution(this.currentResolution_)}}handleDraggerEnd_(t){this.dragging_&&(this.getMap().getView().endInteraction(),this.dragging_=!1,this.startX_=void 0,this.startY_=void 0,this.dragListenerKeys_.forEach(o.JH),this.dragListenerKeys_.length=0)}setThumbPosition_(t){let e=this.getPositionForResolution_(t),i=this.element.firstElementChild;1==this.direction_?i.style.left=this.widthLimit_*e+"px":i.style.top=this.heightLimit_*e+"px"}getRelativePosition_(t,e){let i;return i=1===this.direction_?t/this.widthLimit_:e/this.heightLimit_,(0,l.qE)(i,0,1)}getResolutionForPosition_(t){return this.getMap().getView().getResolutionForValueFunction()(1-t)}getPositionForResolution_(t){let e=this.getMap().getView().getValueForResolutionFunction();return(0,l.qE)(1-e(t),0,1)}render(t){if(!t.frameState||!this.sliderInitialized_&&!this.initSlider_())return;let e=t.frameState.viewState.resolution;this.currentResolution_=e,this.setThumbPosition_(e)}}i.d(e,{},{A:c})},832(t,e,i){var r=i(7862);function n(t,e){return t[0]+=+e[0],t[1]+=+e[1],t}function o(t,e){let i=!0;for(let r=t.length-1;r>=0;--r)if(t[r]!=e[r]){i=!1;break}return i}function s(t,e){let i=Math.cos(e),r=Math.sin(e),n=t[0]*i-t[1]*r,o=t[1]*i+t[0]*r;return t[0]=n,t[1]=o,t}function a(t,e){return t[0]*=e,t[1]*=e,t}function l(t,e){if(e.canWrapX()){var i,n,o;let s,a,l=(0,r.RG)(e.getExtent()),h=(i=t,n=e,o=l,s=n.getExtent(),a=0,n.canWrapX()&&(i[0]<s[0]||i[0]>s[2])&&(o=o||(0,r.RG)(s),a=Math.floor((i[0]-s[0])/o)),a);h&&(t[0]-=h*l)}return t}i.d(e,{Li:()=>l,WQ:()=>n,aI:()=>o,e$:()=>s,hs:()=>a})},2535(t,e,i){let r=RegExp("^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))?\\s*([-,\\\"\\'\\sa-z0-9]+?)\\s*$","i"),n=["style","variant","weight","size","lineHeight","family"],o={normal:400,bold:700};i.d(e,{},{$N:"ol-control",K5:function(t){let e=t.match(r);if(!e)return null;let i={lineHeight:"normal",size:"1.2em",style:"normal",weight:"400",variant:"normal"};for(let t=0,r=n.length;t<r;++t){let r=e[t+1];void 0!==r&&(i[n[t]]="string"==typeof r?r.trim():r)}return isNaN(Number(i.weight))&&i.weight in o&&(i.weight=o[i.weight]),i.families=i.family.split(/,\s?/).map(t=>t.trim().replace(/^['"]|['"]$/g,"")),i},NM:o,Q5:"ol-selectable",Si:"ol-hidden",XI:"ol-unselectable",nT:"ol-collapsed"})},7344(t,e,i){let r;var n=i(7664);function o(t,e,i,r){let o;return o=i&&i.length?i.shift():n.Wl?new class extends OffscreenCanvas{style={}}(t??300,e??150):document.createElement("canvas"),t&&(o.width=t),e&&(o.height=e),o.getContext("2d",r)}function s(){return r||(r=o(1,1)),r}function a(t){let e=t.canvas;e.width=1,e.height=1,t.clearRect(0,0,1,1)}function l(t){let e=t.offsetWidth,i=getComputedStyle(t);return e+(parseInt(i.marginLeft,10)+parseInt(i.marginRight,10))}function h(t){let e=t.offsetHeight,i=getComputedStyle(t);return e+(parseInt(i.marginTop,10)+parseInt(i.marginBottom,10))}function d(t,e){let i=e.parentNode;i&&i.replaceChild(t,e)}function c(t){for(;t.lastChild;)t.lastChild.remove()}function u(t,e){let i=t.childNodes;for(let r=0;;++r){let n=i[r],o=e[r];if(!n&&!o)break;if(n!==o){if(!n){t.appendChild(o);continue}if(!o){t.removeChild(n),--r;continue}t.insertBefore(o,n)}}}function g(){return new Proxy({childNodes:[],appendChild:function(t){return this.childNodes.push(t),t},remove:function(){},removeChild:function(t){let e=this.childNodes.indexOf(t);if(-1===e)throw Error("Node to remove was not found");return this.childNodes.splice(e,1),t},insertBefore:function(t,e){let i=this.childNodes.indexOf(e);if(-1===i)throw Error("Reference node not found");return this.childNodes.splice(i,0,t),t},style:{}},{get:(t,e,i)=>"firstElementChild"===e?t.childNodes.length>0?t.childNodes[0]:null:Reflect.get(t,e,i)})}function p(t){return"u">typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&t instanceof OffscreenCanvas}i.d(e,{DK:()=>h,Gq:()=>l,WM:()=>u,Y:()=>o,Yg:()=>a,fo:()=>d,gS:()=>c,lr:()=>s,mH:()=>g,rB:()=>p})},9599(t,e,i){function r(t){return Math.pow(t,3)}function n(t){return 1-r(1-t)}function o(t){return 3*t*t-2*t*t*t}function s(t){return t}i.d(e,{T9:()=>o,a6:()=>r,sn:()=>s,vT:()=>n})},8291(t,e,i){var r=i(8509);function n(t,e,i,r,n){if(n){let n=i;i=function(o){return t.removeEventListener(e,i),n.call(r??this,o)}}else r&&r!==t&&(i=i.bind(r));let o={target:t,type:e,listener:i};return t.addEventListener(e,i),o}function o(t,e,i,r){return n(t,e,i,r,!0)}function s(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,r.I)(t))}i.d(e,{JH:()=>s,Jz:()=>o,KT:()=>n})},7736(t,e,i){function r(t){t.stopPropagation()}i.d(e,{dG:()=>r},{Ay:class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}})},1280(t,e,i){i.d(e,{},{A:{CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}})},3811(t,e,i){var r=i(6472),n=i(3297),o=i(8509),s=i(7736);class a extends r.A{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let i=this.listeners_||(this.listeners_={}),r=i[t]||(i[t]=[]);r.includes(e)||r.push(e)}dispatchEvent(t){let e,i="string"==typeof t,r=i?t:t.type,o=this.listeners_&&this.listeners_[r];if(!o)return;let a=i?new s.Ay(t):t;a.target||(a.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),h=this.pendingRemovals_||(this.pendingRemovals_={});r in l||(l[r]=0,h[r]=0),++l[r];for(let t=0,i=o.length;t<i;++t)if(!1===(e="handleEvent"in o[t]?o[t].handleEvent(a):o[t].call(this,a))||a.propagationStopped){e=!1;break}if(0==--l[r]){let t=h[r];for(delete h[r];t--;)this.removeEventListener(r,n.tV);delete l[r]}return e}disposeInternal(){this.listeners_&&(0,o.I)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,e){if(!this.listeners_)return;let i=this.listeners_[t];if(!i)return;let r=i.indexOf(e);-1!==r&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[r]=n.tV,++this.pendingRemovals_[t]):(i.splice(r,1),0===i.length&&delete this.listeners_[t]))}}i.d(e,{},{A:a})},7862(t,e,i){i.d(e,{NW:()=>F,Tr:()=>r,o8:()=>n,Ld:()=>o,Ym:()=>s,ms:()=>a,Rj:()=>l,S5:()=>d,N:()=>c,aZ:()=>u,dP:()=>g,Vy:()=>p,aI:()=>m,X$:()=>f,$C:()=>v,R8:()=>_,sB:()=>w,UG:()=>y,R:()=>b,k_:()=>C,q1:()=>x,qF:()=>E,Bg:()=>A,Oq:()=>M,_N:()=>R,Yw:()=>L,Py:()=>S,WU:()=>T,RG:()=>I,HY:()=>P,Mx:()=>z,Im:()=>O,$u:()=>k,QJ:()=>D});function r(t){let e=d();for(let i=0,r=t.length;i<r;++i)v(e,t[i]);return e}function n(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t.slice()}function o(t,e,i){let r,n;return(r=e<t[0]?t[0]-e:t[2]<e?e-t[2]:0)*r+(n=i<t[1]?t[1]-i:t[3]<i?i-t[3]:0)*n}function s(t,e){return l(t,e[0],e[1])}function a(t,e){return t[0]<=e[0]&&e[2]<=t[2]&&t[1]<=e[1]&&e[3]<=t[3]}function l(t,e,i){return t[0]<=e&&e<=t[2]&&t[1]<=i&&i<=t[3]}function h(t,e){let i=t[0],r=t[1],n=t[2],o=t[3],s=e[0],a=e[1],l=0;return s<i?l|=16:s>n&&(l|=4),a<r?l|=8:a>o&&(l|=2),0===l&&(l=1),l}function d(){return[1/0,1/0,-1/0,-1/0]}function c(t,e,i,r,n){return n?(n[0]=t,n[1]=e,n[2]=i,n[3]=r,n):[t,e,i,r]}function u(t){return c(1/0,1/0,-1/0,-1/0,t)}function g(t,e){let i=t[0],r=t[1];return c(i,r,i,r,e)}function p(t,e,i,r,n){return _(u(n),t,e,i,r)}function m(t,e){return t[0]==e[0]&&t[2]==e[2]&&t[1]==e[1]&&t[3]==e[3]}function f(t,e){return e[0]<t[0]&&(t[0]=e[0]),e[2]>t[2]&&(t[2]=e[2]),e[1]<t[1]&&(t[1]=e[1]),e[3]>t[3]&&(t[3]=e[3]),t}function v(t,e){e[0]<t[0]&&(t[0]=e[0]),e[0]>t[2]&&(t[2]=e[0]),e[1]<t[1]&&(t[1]=e[1]),e[1]>t[3]&&(t[3]=e[1])}function _(t,e,i,r,n){for(;i<r;i+=n){var o,s,a;o=t,s=e[i],a=e[i+1],o[0]=Math.min(o[0],s),o[1]=Math.min(o[1],a),o[2]=Math.max(o[2],s),o[3]=Math.max(o[3],a)}return t}function w(t,e){let i;return!!((i=e(b(t)))||(i=e(C(t)))||(i=e(T(t)))||(i=e(S(t))))&&i}function y(t){let e=0;return O(t)||(e=I(t)*M(t)),e}function b(t){return[t[0],t[1]]}function C(t){return[t[2],t[1]]}function x(t){return[(t[0]+t[2])/2,(t[1]+t[3])/2]}function E(t,e){let i;if("bottom-left"===e)i=b(t);else if("bottom-right"===e)i=C(t);else if("top-left"===e)i=S(t);else if("top-right"===e)i=T(t);else throw Error("Invalid corner");return i}function A(t,e,i,r,n){let[o,s,a,l,h,d,u,g]=L(t,e,i,r);return c(Math.min(o,a,h,u),Math.min(s,l,d,g),Math.max(o,a,h,u),Math.max(s,l,d,g),n)}function L(t,e,i,r){let n=e*r[0]/2,o=e*r[1]/2,s=Math.cos(i),a=Math.sin(i),l=n*s,h=n*a,d=o*s,c=o*a,u=t[0],g=t[1];return[u-l+c,g-h-d,u-l-c,g-h+d,u+l-c,g+h+d,u+l+c,g+h-d,u-l+c,g-h-d]}function M(t){return t[3]-t[1]}function R(t,e,i){let r=i||d();return P(t,e)?(t[0]>e[0]?r[0]=t[0]:r[0]=e[0],t[1]>e[1]?r[1]=t[1]:r[1]=e[1],t[2]<e[2]?r[2]=t[2]:r[2]=e[2],t[3]<e[3]?r[3]=t[3]:r[3]=e[3]):u(r),r}function S(t){return[t[0],t[3]]}function T(t){return[t[2],t[3]]}function I(t){return t[2]-t[0]}function P(t,e){return t[0]<=e[2]&&t[2]>=e[0]&&t[1]<=e[3]&&t[3]>=e[1]}function O(t){return t[2]<t[0]||t[3]<t[1]}function k(t,e){return e?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):t}function z(t,e,i){let r=!1,n=h(t,e),o=h(t,i);if(1===n||1===o)r=!0;else{let s,a,l=t[0],h=t[1],d=t[2],c=t[3],u=e[0],g=e[1],p=i[0],m=i[1],f=(m-g)/(p-u);2&o&&!(2&n)&&(r=(s=p-(m-c)/f)>=l&&s<=d),r||!(4&o)||4&n||(r=(a=m-(p-d)*f)>=h&&a<=c),r||!(8&o)||8&n||(r=(s=p-(m-h)/f)>=l&&s<=d),r||!(16&o)||16&n||(r=(a=m-(p-l)*f)>=h&&a<=c)}return r}function F(t,e,i,r){let n,o;if(O(t))return u(i);let s=[];if(r>1){let e=t[2]-t[0],i=t[3]-t[1];for(let n=0;n<r;++n)s.push(t[0]+e*n/r,t[1],t[2],t[1]+i*n/r,t[2]-e*n/r,t[3],t[0],t[3]-i*n/r)}else s=[t[0],t[1],t[2],t[1],t[2],t[3],t[0],t[3]];e(s,s,2);let a=[],l=[];for(let t=0,e=s.length;t<e;t+=2)a.push(s[t]),l.push(s[t+1]);return n=Math.min.apply(null,a),o=Math.min.apply(null,l),c(n,o,Math.max.apply(null,a),Math.max.apply(null,l),i)}function D(t,e,i){if(e.canWrapX()){let o=e.getExtent();if(!isFinite(t[0])||!isFinite(t[2]))return[[o[0],t[1],o[2],t[3]]];var r=t,n=e;let s=n.getExtent(),a=x(r);if(n.canWrapX()&&(a[0]<s[0]||a[0]>=s[2])){let t=I(s),e=Math.floor((a[0]-s[0])/t)*t;r[0]-=e,r[2]-=e}let l=I(o);if(I(t)>l&&!i)return[[o[0],t[1],o[2],t[3]]];if(t[0]<o[0])return[[t[0]+l,t[1],o[2],t[3]],[o[0],t[1],t[2],t[3]]];if(t[2]>o[2])return[[t[0],t[1],o[2],t[3]],[o[0],t[1],t[2]-l,t[3]]]}return[t]}},3297(t,e,i){var r=i(5609);function n(){return!0}function o(){return!1}function s(){}function a(t){let e,i,n;return function(){let o=Array.prototype.slice.call(arguments);return i&&this===n&&(0,r.aI)(o,i)||(n=this,i=o,e=t.apply(this,arguments)),e}}function l(t){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}i.d(e,{B4:()=>a,W8:()=>o,hq:()=>l,rT:()=>n,tV:()=>s})},3626(t,e,i){i.d(e,{Ay:()=>I,VY:()=>P});var r=i(5609),n=i(7862),o=i(2298),s=i(8933),a=i(3297),l=i(793),h=i(2416);let d=(0,h.vt)(),c=[NaN,NaN];class u extends s.A{constructor(){super(),this.extent_=(0,n.S5)(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=(0,a.B4)((t,e,i)=>{if(!i)return this.getSimplifiedGeometry(e);let r=this.clone();return r.applyTransform(i),r.getSimplifiedGeometry(e)})}simplifyTransformed(t,e){return this.simplifyTransformedInternal(this.getRevision(),t,e)}clone(){return(0,o.b0)()}closestPointXY(t,e,i,r){return(0,o.b0)()}containsXY(t,e){return 0===this.closestPointXY(t,e,c,5e-324)}getClosestPoint(t,e){return e=e||[NaN,NaN],this.closestPointXY(t[0],t[1],e,1/0),e}intersectsCoordinate(t){return this.containsXY(t[0],t[1])}computeExtent(t){return(0,o.b0)()}getExtent(t){if(this.extentRevision_!=this.getRevision()){let t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&(0,n.aZ)(t),this.extentRevision_=this.getRevision()}return(0,n.$u)(this.extent_,t)}rotate(t,e){(0,o.b0)()}scale(t,e,i){(0,o.b0)()}simplify(t){return this.getSimplifiedGeometry(t*t)}getSimplifiedGeometry(t){return(0,o.b0)()}getType(){return(0,o.b0)()}applyTransform(t){(0,o.b0)()}intersectsExtent(t){return(0,o.b0)()}translate(t,e){(0,o.b0)()}transform(t,e){let i=(0,l.Jt)(t),r="tile-pixels"==i.getUnits()?function(t,r,o){let s=i.getExtent(),a=i.getWorldExtent(),c=(0,n.Oq)(a)/(0,n.Oq)(s);(0,h.Zz)(d,a[0],a[3],c,-c,0,0,0);let u=function(t,e,i,r,n,o){n=n||[],o=o||2;let s=0;for(let a=0;a<e;a+=i){let e=t[a],i=t[a+1];n[s++]=r[0]*e+r[2]*i+r[4],n[s++]=r[1]*e+r[3]*i+r[5];for(let e=2;e<o;e++)n[s++]=t[a+e]}return n&&n.length!=s&&(n.length=s),n}(t,t.length,o,d,r),g=(0,l.RG)(i,e);return g?g(u,u,o):u}:(0,l.RG)(i,e);return this.applyTransform(r),this}}let g=u;function p(t){let e;return"XY"==t?e=2:"XYZ"==t||"XYM"==t?e=3:"XYZM"==t&&(e=4),e}let m=class extends g{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(t){return(0,n.Vy)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinates(){return(0,o.b0)()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;let e=this.getSimplifiedGeometryInternal(t);return e.getFlatCoordinates().length<this.flatCoordinates.length?e:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getSimplifiedGeometryInternal(t){return this}getStride(){return this.stride}setFlatCoordinates(t,e){this.stride=p(t),this.layout=t,this.flatCoordinates=e}setCoordinates(t,e){(0,o.b0)()}setLayout(t,e,i){let r;if(t)r=p(t);else{var n;let o;for(let t=0;t<i;++t){if(0===e.length){this.layout="XY",this.stride=2;return}e=e[0]}2==(n=r=e.length)?o="XY":3==n?o="XYZ":4==n&&(o="XYZM"),t=o}this.layout=t,this.stride=r}applyTransform(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.layout.startsWith("XYZ")?3:2,this.stride),this.changed())}rotate(t,e){let i=this.getFlatCoordinates();if(i){let r=this.getStride();!function(t,e,i,r,n,o){o=o||[];let s=Math.cos(r),a=Math.sin(r),l=n[0],h=n[1],d=0;for(let r=0;r<e;r+=i){let e=t[r]-l,n=t[r+1]-h;o[d++]=l+e*s-n*a,o[d++]=h+e*a+n*s;for(let e=r+2;e<r+i;++e)o[d++]=t[e]}o&&o.length!=d&&(o.length=d)}(i,i.length,r,t,e,i),this.changed()}}scale(t,e,i){void 0===e&&(e=t),i||(i=(0,n.q1)(this.getExtent()));let r=this.getFlatCoordinates();if(r){let n=this.getStride();!function(t,e,i,r,n,o,s){s=s||[];let a=o[0],l=o[1],h=0;for(let o=0;o<e;o+=i){let e=t[o]-a,d=t[o+1]-l;s[h++]=a+r*e,s[h++]=l+n*d;for(let e=o+2;e<o+i;++e)s[h++]=t[e]}s&&s.length!=h&&(s.length=h)}(r,r.length,n,t,e,i,r),this.changed()}}translate(t,e){let i=this.getFlatCoordinates();if(i){let r=this.getStride();!function(t,e,i,r,n,o){o=o||[];let s=0;for(let a=0;a<e;a+=i){o[s++]=t[a]+r,o[s++]=t[a+1]+n;for(let e=a+2;e<a+i;++e)o[s++]=t[e]}o&&o.length!=s&&(o.length=s)}(i,i.length,r,t,e,i),this.changed()}}};function f(t,e,i,r){let n=0,o=t[i-r],s=t[i-r+1],a=0,l=0;for(;e<i;e+=r){let i=t[e]-o,r=t[e+1]-s;n+=l*i-a*r,a=i,l=r}return n/2}var v=i(76);function _(t,e,i,r,n,o,s){let a,l=t[e],h=t[e+1],d=t[i]-l,c=t[i+1]-h;if(0===d&&0===c)a=e;else{let u=((n-l)*d+(o-h)*c)/(d*d+c*c);if(u>1)a=i;else if(u>0){for(let n=0;n<r;++n)s[n]=(0,v.Cc)(t[e+n],t[i+n],u);s.length=r;return}else a=e}for(let e=0;e<r;++e)s[e]=t[a+e];s.length=r}function w(t,e,i,r,n){let o=t[e],s=t[e+1];for(e+=r;e<i;e+=r){let i=t[e],r=t[e+1],a=(0,v.hG)(o,s,i,r);a>n&&(n=a),o=i,s=r}return n}function y(t,e,i,r,n,o,s,a,l,h,d){let c,u;if(e==i)return h;if(0===n){if((u=(0,v.hG)(s,a,t[e],t[e+1]))<h){for(c=0;c<r;++c)l[c]=t[e+c];return l.length=r,u}return h}d=d||[NaN,NaN];let g=e+r;for(;g<i;)if(_(t,g-r,g,r,s,a,d),(u=(0,v.hG)(s,a,d[0],d[1]))<h){for(h=u,c=0;c<r;++c)l[c]=d[c];l.length=r,g+=r}else g+=r*Math.max((Math.sqrt(u)-Math.sqrt(h))/n|0,1);if(o&&(_(t,i-r,e,r,s,a,d),(u=(0,v.hG)(s,a,d[0],d[1]))<h)){for(h=u,c=0;c<r;++c)l[c]=d[c];l.length=r}return h}function b(t,e,i,r){for(let n=0,o=i.length;n<o;++n){let o=i[n];for(let i=0;i<r;++i)t[e++]=o[i]}return e}function C(t,e,i,r,n){n=void 0!==n?n:[];let o=0;for(let s=e;s<i;s+=r)n[o++]=t.slice(s,s+r);return n.length=o,n}function x(t,e){return e*Math.round(t/e)}let E=class t extends m{constructor(t,e){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===e||Array.isArray(t[0])?this.setCoordinates(t,e):this.setFlatCoordinates(e,t)}clone(){return new t(this.flatCoordinates.slice(),this.layout)}closestPointXY(t,e,i,r){return r<(0,n.Ld)(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(w(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),y(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,i,r))}getArea(){return f(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return C(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(e){let i=[];return i.length=function(t,e,i,r,n,o,s){let a=(i-e)/r;if(a<3){for(;e<i;e+=r)o[s++]=t[e],o[s++]=t[e+1];return s}let l=Array(a);l[0]=1,l[a-1]=1;let h=[e,i-r],d=0;for(;h.length>0;){let i=h.pop(),o=h.pop(),s=0,a=t[o],c=t[o+1],u=t[i],g=t[i+1];for(let e=o+r;e<i;e+=r){let i=t[e],r=t[e+1],n=(0,v.Q1)(i,r,a,c,u,g);n>s&&(d=e,s=n)}s>n&&(l[(d-e)/r]=1,o+r<d&&h.push(o,d),d+r<i&&h.push(d,i))}for(let i=0;i<a;++i)l[i]&&(o[s++]=t[e+i*r],o[s++]=t[e+i*r+1]);return s}(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,i,0),new t(i,"XY")}getType(){return"LinearRing"}intersectsExtent(t){return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=b(this.flatCoordinates,0,t,this.stride),this.changed()}},A=class t extends m{constructor(t,e){super(),this.setCoordinates(t,e)}clone(){let e=new t(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(t,e,i,r){let n=this.flatCoordinates,o=(0,v.hG)(t,e,n[0],n[1]);if(o<r){let t=this.stride;for(let e=0;e<t;++e)i[e]=n[e];return i.length=t,o}return r}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(t){return(0,n.dP)(this.flatCoordinates,t)}getType(){return"Point"}intersectsExtent(t){return(0,n.Rj)(t,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=function(t,e,i,r){for(let r=0,n=i.length;r<n;++r)t[e++]=i[r];return e}(this.flatCoordinates,0,t,this.stride),this.changed()}};var L=i(3372),M=i(4615);function R(t,e,i,r){let n=0,o=t[i-r],s=t[i-r+1];for(;e<i;e+=r){let i=t[e],r=t[e+1];n+=(i-o)*(r+s),o=i,s=r}return 0===n?void 0:n>0}function S(t,e,i,r,n){n=void 0!==n&&n;for(let o=0,s=i.length;o<s;++o){let s=i[o],a=R(t,e,s,r);(0===o?n&&a||!n&&!a:n&&!a||!n&&a)&&function(t,e,i,r){for(;e<i-r;){for(let n=0;n<r;++n){let o=t[e+n];t[e+n]=t[i-r+n],t[i-r+n]=o}e+=r,i-=r}}(t,e,s,r),e=s}return e}class T extends m{constructor(t,e,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,void 0!==e&&i?(this.setFlatCoordinates(e,t),this.ends_=i):this.setCoordinates(t,e)}appendLinearRing(t){this.flatCoordinates?(0,r.X$)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new T(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,r){return r<(0,n.Ld)(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(function(t,e,i,r,n){for(let o=0,s=i.length;o<s;++o){let s=i[o];n=w(t,e,s,r,n),e=s}return n}(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),function(t,e,i,r,n,o,s,a,l,h,d){d=d||[NaN,NaN];for(let c=0,u=i.length;c<u;++c){let u=i[c];h=y(t,e,u,r,n,o,s,a,l,h,d),e=u}return h}(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,i,r))}containsXY(t,e){return(0,L.zb)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)}getArea(){return function(t,e,i,r){let n=0;for(let o=0,s=i.length;o<s;++o){let s=i[o];n+=f(t,e,s,r),e=s}return n}(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(t){let e;return void 0!==t?S(e=this.getOrientedFlatCoordinates().slice(),0,this.ends_,this.stride,t):e=this.flatCoordinates,function(t,e,i,r,n){n=void 0!==n?n:[];let o=0;for(let s=0,a=i.length;s<a;++s){let a=i[s];n[o++]=C(t,e,a,r,n[o]),e=a}return n.length=o,n}(e,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){let t=(0,n.q1)(this.getExtent());this.flatInteriorPoint_=function(t,e,i,n){let o,s,a,l,h,d,c,u=n[1],g=[];for(let r=0,n=e.length;r<n;++r){let n=e[r];for(l=t[n-i],d=t[n-i+1],o=0;o<n;o+=i)h=t[o],c=t[o+1],(u<=d&&c<=u||d<=u&&u<=c)&&(a=(u-d)/(c-d)*(h-l)+l,g.push(a)),l=h,d=c}let p=NaN,m=-1/0;for(g.sort(r.V_),l=g[0],o=1,s=g.length;o<s;++o){let r=Math.abs((h=g[o])-l);r>m&&(a=(l+h)/2,(0,L.zb)(t,0,e,i,a,u)&&(p=a,m=r)),l=h}return isNaN(p)&&(p=n[0]),[p,u,m]}(this.getOrientedFlatCoordinates(),this.ends_,this.stride,t),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new A(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(t){return t<0||this.ends_.length<=t?null:new E(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLinearRings(){let t=this.layout,e=this.flatCoordinates,i=this.ends_,r=[],n=0;for(let o=0,s=i.length;o<s;++o){let s=i[o],a=new E(e.slice(n,s),t);r.push(a),n=s}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let t=this.flatCoordinates;!function(t,e,i,r,n){n=void 0!==n&&n;for(let o=0,s=i.length;o<s;++o){let s=i[o],a=R(t,e,s,r);if(0===o){if(n&&a||!n&&!a)return!1}else if(n&&!a||!n&&a)return!1;e=s}return!0}(t,0,this.ends_,this.stride)?(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=S(this.orientedFlatCoordinates_,0,this.ends_,this.stride)):this.orientedFlatCoordinates_=t,this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let e=[],i=[];return e.length=function(t,e,i,r,n,o,s,a){for(let l=0,h=i.length;l<h;++l){let h=i[l];s=function(t,e,i,r,n,o,s){let a,l;if(e==i)return s;let h=x(t[e],n),d=x(t[e+1],n);e+=r,o[s++]=h,o[s++]=d;do if(a=x(t[e],n),l=x(t[e+1],n),(e+=r)==i)return o[s++]=a,o[s++]=l,s;while(a==h&&l==d)for(;e<i;){let i=x(t[e],n),c=x(t[e+1],n);if(e+=r,i==a&&c==l)continue;let u=a-h,g=l-d,p=i-h,m=c-d;if(u*m==g*p&&(u<0&&p<u||u==p||u>0&&p>u)&&(g<0&&m<g||g==m||g>0&&m>g)){a=i,l=c;continue}o[s++]=a,o[s++]=l,h=a,d=l,a=i,l=c}return o[s++]=a,o[s++]=l,s}(t,e,h,r,n,o,s),a.push(s),e=h}return s}(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),e,0,i),new T(e,"XY",i)}getType(){return"Polygon"}intersectsExtent(t){return(0,M.HT)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);let i=function(t,e,i,r,n){n=n||[];let o=0;for(let s=0,a=i.length;s<a;++s){let a=b(t,e,i[s],r);n[o++]=a,e=a}return n.length=o,n}(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===i.length?0:i[i.length-1],this.changed()}}let I=T;function P(t){if((0,n.Im)(t))throw Error("Cannot create polygon from empty extent");let e=t[0],i=t[1],r=t[2],o=t[3],s=[e,i,e,o,r,o,r,i,e,i];return new T(s,"XY",[s.length])}},3372(t,e,i){var r=i(7862);function n(t,e,i,n,s){return!(0,r.sB)(s,function(r){return!o(t,e,i,n,r[0],r[1])})}function o(t,e,i,r,n,o){let s=0,a=t[i-r],l=t[i-r+1];for(;e<i;e+=r){let i=t[e],r=t[e+1];l<=o?r>o&&(i-a)*(o-l)-(n-a)*(r-l)>0&&s++:r<=o&&(i-a)*(o-l)-(n-a)*(r-l)<0&&s--,a=i,l=r}return 0!==s}function s(t,e,i,r,n,s){if(0===i.length||!o(t,e,i[0],r,n,s))return!1;for(let e=1,a=i.length;e<a;++e)if(o(t,i[e-1],i[e],r,n,s))return!1;return!0}i.d(e,{a_:()=>o,t7:()=>n,zb:()=>s})},4615(t,e,i){i.d(e,{sj:()=>s,HT:()=>a});var r=i(7862),n=i(3372);function o(t,e,i,n,o,s){let a;if(s=s??(0,r.R8)((0,r.S5)(),t,e,i,n),!(0,r.HY)(o,s))return!1;if(s[0]>=o[0]&&s[2]<=o[2]||s[1]>=o[1]&&s[3]<=o[3])return!0;var l,h,d=e;for(d+=n;d<i;d+=n){if(l=t.slice(d-n,d),h=t.slice(d,d+n),a=(0,r.Mx)(o,l,h))return a}return!1}function s(t,e,i,r,s){return!!(o(t,e,i,r,s)||(0,n.a_)(t,e,i,r,s[0],s[1])||(0,n.a_)(t,e,i,r,s[0],s[3])||(0,n.a_)(t,e,i,r,s[2],s[1])||(0,n.a_)(t,e,i,r,s[2],s[3]))}function a(t,e,i,r,a){if(!s(t,e,i[0],r,a))return!1;if(1===i.length)return!0;for(let e=1,s=i.length;e<s;++e)if((0,n.t7)(t,i[e-1],i[e],r,a)&&!o(t,i[e-1],i[e],r,a))return!1;return!0}},7664(t,e,i){let r="u">typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"";r.includes("safari")&&!r.includes("chrom")&&(r.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(r));let n=r.includes("webkit")&&!r.includes("edge"),o=r.includes("macintosh"),s="u">typeof devicePixelRatio?devicePixelRatio:1,a="u">typeof WorkerGlobalScope&&"u">typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,l="u">typeof Image&&Image.prototype.decode,h="function"==typeof createImageBitmap,d=function(){let t=!1;try{let e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return t}();i.d(e,{},{DT:l,FT:d,Wl:a,XM:h,cr:s,ew:o,j:n})},8097(t,e,i){var r=i(8933),n=i(4287),o=i(76),s=i(2298),a=i(8757);class l extends r.A{constructor(t){super(),this.on,this.once,this.un,this.background_=t.background;const e=Object.assign({},t);"object"==typeof t.properties&&(delete e.properties,Object.assign(e,t.properties)),e[a.A.OPACITY]=void 0!==t.opacity?t.opacity:1,(0,n.v)("number"==typeof e[a.A.OPACITY],"Layer opacity must be a number"),e[a.A.VISIBLE]=void 0===t.visible||t.visible,e[a.A.Z_INDEX]=t.zIndex,e[a.A.MAX_RESOLUTION]=void 0!==t.maxResolution?t.maxResolution:1/0,e[a.A.MIN_RESOLUTION]=void 0!==t.minResolution?t.minResolution:0,e[a.A.MIN_ZOOM]=void 0!==t.minZoom?t.minZoom:-1/0,e[a.A.MAX_ZOOM]=void 0!==t.maxZoom?t.maxZoom:1/0,this.className_=void 0!==e.className?e.className:"ol-layer",delete e.className,this.setProperties(e),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(t){let e=this.state_||{layer:this,managed:void 0===t||t},i=this.getZIndex();return e.opacity=(0,o.qE)(Math.round(100*this.getOpacity())/100,0,1),e.visible=this.getVisible(),e.extent=this.getExtent(),e.zIndex=void 0!==i||e.managed?i:1/0,e.maxResolution=this.getMaxResolution(),e.minResolution=Math.max(this.getMinResolution(),0),e.minZoom=this.getMinZoom(),e.maxZoom=this.getMaxZoom(),this.state_=e,e}getLayersArray(t){return(0,s.b0)()}getLayerStatesArray(t){return(0,s.b0)()}getExtent(){return this.get(a.A.EXTENT)}getMaxResolution(){return this.get(a.A.MAX_RESOLUTION)}getMinResolution(){return this.get(a.A.MIN_RESOLUTION)}getMinZoom(){return this.get(a.A.MIN_ZOOM)}getMaxZoom(){return this.get(a.A.MAX_ZOOM)}getOpacity(){return this.get(a.A.OPACITY)}getSourceState(){return(0,s.b0)()}getVisible(){return this.get(a.A.VISIBLE)}getZIndex(){return this.get(a.A.Z_INDEX)}setBackground(t){this.background_=t,this.changed()}setExtent(t){this.set(a.A.EXTENT,t)}setMaxResolution(t){this.set(a.A.MAX_RESOLUTION,t)}setMinResolution(t){this.set(a.A.MIN_RESOLUTION,t)}setMaxZoom(t){this.set(a.A.MAX_ZOOM,t)}setMinZoom(t){this.set(a.A.MIN_ZOOM,t)}setOpacity(t){(0,n.v)("number"==typeof t,"Layer opacity must be a number"),this.set(a.A.OPACITY,t)}setVisible(t){this.set(a.A.VISIBLE,t)}setZIndex(t){this.set(a.A.Z_INDEX,t)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}i.d(e,{},{A:l})},9323(t,e,i){var r=i(1688),n=i(4287),o=i(8291),s=i(1280),a=i(7862),l=i(3477),h=i(8097),d=i(8757);class c extends h.A{constructor(t){const e=Object.assign({},t);delete e.source,super(e),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,t.render&&(this.render=t.render),t.map&&this.setMap(t.map),this.addChangeListener(d.A.SOURCE,this.handleSourcePropertyChange_);const i=t.source?t.source:null;this.setSource(i)}getLayersArray(t){return(t=t||[]).push(this),t}getLayerStatesArray(t){return(t=t||[]).push(this.getLayerState()),t}getSource(){return this.get(d.A.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){let t=this.getSource();return t?t.getState():"undefined"}handleSourceChange_(){this.changed(),this.sourceReady_||"ready"!==this.getSource().getState()||(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&((0,o.JH)(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;let t=this.getSource();t&&(this.sourceChangeKey_=(0,o.KT)(t,s.A.CHANGE,this.handleSourceChange_,this),"ready"===t.getState()&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(t){return this.renderer_?this.renderer_.getFeatures(t):Promise.resolve([])}getData(t){return this.renderer_&&this.rendered?this.renderer_.getData(t):null}isVisible(t){let e,i,n=this.getMapInternal();if(!t&&n&&(t=n.getView()),!(e=t instanceof r.Ay?{viewState:t.getState(),extent:t.calculateExtent()}:t).layerStatesArray&&n&&(e.layerStatesArray=n.getLayerGroup().getLayerStatesArray()),e.layerStatesArray){if(!(i=e.layerStatesArray.find(t=>t.layer===this)))return!1}else i=this.getLayerState();let o=this.getExtent();return u(i,e.viewState)&&(!o||(0,a.HY)(o,e.extent))}getAttributions(t){if(!this.isVisible(t))return[];let e=this.getSource()?.getAttributions();if(!e)return[];let i=e(t instanceof r.Ay?t.getViewStateAndExtent():t);return Array.isArray(i)||(i=[i]),i}render(t,e){let i=this.getRenderer();return i.prepareFrame(t)?(this.rendered=!0,i.renderFrame(t,e)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(t,e){}renderDeferred(t){let e=this.getRenderer();e&&e.renderDeferred(t)}setMapInternal(t){t||this.unrender(),this.set(d.A.MAP,t)}getMapInternal(){return this.get(d.A.MAP)}setMap(t){this.mapPrecomposeKey_&&((0,o.JH)(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&((0,o.JH)(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=(0,o.KT)(t,l.A.PRECOMPOSE,this.handlePrecompose_,this),this.mapRenderKey_=(0,o.KT)(this,s.A.CHANGE,t.render,t),this.changed())}handlePrecompose_(t){let e=t.frameState.layerStatesArray,i=this.getLayerState(!1);(0,n.v)(!e.some(t=>t.layer===i.layer),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),e.push(i)}setSource(t){this.set(d.A.SOURCE,t)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}clearRenderer(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_)}disposeInternal(){this.clearRenderer(),this.setSource(null),super.disposeInternal()}}function u(t,e){if(!t.visible)return!1;let i=e.resolution;if(i<t.minResolution||i>=t.maxResolution)return!1;let r=e.zoom;return r>t.minZoom&&r<=t.maxZoom}i.d(e,{l:()=>u},{A:c})},8757(t,e,i){i.d(e,{},{A:{OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"}})},917(t,e,i){i.d(e,{A:()=>K});var r=i(6410),n=i(9925);function o(t){return t instanceof Image||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement||t instanceof ImageBitmap?t:null}let s=Error("disposed"),a=[256,256];class l extends r.A{constructor(t){const e=n.A.IDLE;super(t.tileCoord,e,{transition:t.transition,interpolate:t.interpolate}),this.loader_=t.loader,this.data_=null,this.error_=null,this.size_=t.size||null,this.controller_=t.controller||null}getSize(){if(this.size_)return this.size_;let t=o(this.data_);return t?[t.width,t.height]:a}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==n.A.IDLE&&this.state!==n.A.ERROR)return;this.state=n.A.LOADING,this.changed();let t=this;this.loader_().then(function(e){t.data_=e,t.state=n.A.LOADED,t.changed()}).catch(function(e){t.error_=e,t.state=n.A.ERROR,t.changed()})}disposeInternal(){this.controller_&&(this.controller_.abort(s),this.controller_=null),super.disposeInternal()}}var h=i(9713),d=i(8137),c=i(5609),u=i(7862),g=i(793),p=i(5858),m=i(7003),f=i(6472),v=i(4287);let _=class{constructor(t){this.highWaterMark=void 0!==t?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}deleteOldest(){let t=this.pop();t instanceof f.A&&t.dispose()}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(t){for(;this.canExpireCache();)this.deleteOldest()}clear(){for(;this.oldest_;)this.deleteOldest()}containsKey(t){return this.entries_.hasOwnProperty(t)}forEach(t){let e=this.oldest_;for(;e;)t(e.value_,e.key_,this),e=e.newer}get(t,e){let i=this.entries_[t];return(0,v.v)(void 0!==i,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(t){let e=this.entries_[t];return(0,v.v)(void 0!==e,"Tried to get a value for a key that does not exist in the cache"),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_}getCount(){return this.count_}getKeys(){let t,e=Array(this.count_),i=0;for(t=this.newest_;t;t=t.older)e[i++]=t.key_;return e}getValues(){let t,e=Array(this.count_),i=0;for(t=this.newest_;t;t=t.older)e[i++]=t.value_;return e}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(t){return this.entries_[t]?.value_}pop(){let t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_}replace(t,e){this.get(t),this.entries_[t].value_=e}set(t,e){(0,v.v)(!(t in this.entries_),"Tried to set a value for a key that is used already");let i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_}setSize(t){this.highWaterMark=t}};var w=i(5549),y=i(2416),b=i(2298),C=i(1975),x=i(7344),E=i(7664),A=i(4757),L=i(3477);let M=class{constructor(){this.instructions_=[],this.zIndex=0,this.offset_=0,this.context_=new Proxy((0,x.lr)(),{get:(t,e)=>{if("function"==typeof(0,x.lr)()[e])return this.push_(e),this.pushMethodArgs_},set:(t,e,i)=>(this.push_(e,i),!0)})}push_(...t){let e=this.instructions_,i=this.zIndex+this.offset_;e[i]||(e[i]=[]),e[i].push(...t)}pushMethodArgs_=(...t)=>(this.push_(t),this);pushFunction(t){this.push_(t)}getContext(){return this.context_}draw(t){this.instructions_.forEach(e=>{for(let i=0,r=e.length;i<r;++i){let r=e[i];if("function"==typeof r){r(t);continue}let n=e[++i];if("function"==typeof t[r])t[r](...n);else{if("function"==typeof n){t[r]=n(t);continue}t[r]=n}}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}};var R=i(3420),S=i(5231),T=i(1280);class I extends S.A{constructor(t){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=t,this.staleKeys_=[],this.maxStaleKeys=5}getStaleKeys(){return this.staleKeys_}prependStaleKey(t){this.staleKeys_.unshift(t),this.staleKeys_.length>this.maxStaleKeys&&(this.staleKeys_.length=this.maxStaleKeys)}getFeatures(t){return(0,b.b0)()}getData(t){return null}prepareFrame(t){return(0,b.b0)()}renderFrame(t,e){return(0,b.b0)()}forEachFeatureAtCoordinate(t,e,i,r,n){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(t){let e=t.target;(e.getState()===R.A.LOADED||e.getState()===R.A.ERROR)&&this.renderIfReadyAndVisible()}loadImage(t){let e=t.getState();return e!=R.A.LOADED&&e!=R.A.ERROR&&t.addEventListener(T.A.CHANGE,this.boundHandleImageChange_),e==R.A.IDLE&&(t.load(),e=t.getState()),e==R.A.LOADED}renderIfReadyAndVisible(){let t=this.getLayer();t&&t.getVisible()&&"ready"===t.getSourceState()&&t.changed()}renderDeferred(t){}disposeInternal(){delete this.layer_,super.disposeInternal()}}let P=I,O=null,k=class extends P{constructor(t){super(t),this.container=null,this.renderedResolution,this.tempTransform=(0,y.vt)(),this.pixelTransform=(0,y.vt)(),this.inversePixelTransform=(0,y.vt)(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.frameState=null}getImageData(t,e,i){let r;O||(O=(0,x.Y)(1,1,void 0,{willReadFrequently:!0})),O.clearRect(0,0,1,1);try{O.drawImage(t,e,i,1,1,0,0,1,1),r=O.getImageData(0,0,1,1).data}catch{return O=null,null}return r}getBackground(t){let e=this.getLayer().getBackground();return"function"==typeof e&&(e=e(t.viewState.resolution)),e||void 0}useContainer(t,e,i){let r,n,o=this.getLayer().getClassName();if(t&&t.className===o&&(!i||t&&t.style.backgroundColor&&(0,c.aI)((0,C._j)(t.style.backgroundColor),(0,C._j)(i)))){let e=t.firstElementChild;(0,x.rB)(e)&&(n=e.getContext("2d"))}if(n&&(0,y.tI)(n.canvas.style.transform,e)?(this.container=t,this.context=n,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){(r=E.Wl?(0,x.mH)():document.createElement("div")).className=o;let t=r.style;t.position="absolute",t.width="100%",t.height="100%";let e=(n=(0,x.Y)()).canvas;r.appendChild(e),(t=e.style).position="absolute",t.left="0",t.transformOrigin="top left",this.container=r,this.context=n}this.containerReused||!i||this.container.style.backgroundColor||(this.container.style.backgroundColor=i)}clipUnrotated(t,e,i){let r=(0,u.Py)(i),n=(0,u.WU)(i),o=(0,u.k_)(i),s=(0,u.R)(i);(0,y.Bb)(e.coordinateToPixelTransform,r),(0,y.Bb)(e.coordinateToPixelTransform,n),(0,y.Bb)(e.coordinateToPixelTransform,o),(0,y.Bb)(e.coordinateToPixelTransform,s);let a=this.inversePixelTransform;(0,y.Bb)(a,r),(0,y.Bb)(a,n),(0,y.Bb)(a,o),(0,y.Bb)(a,s),t.save(),t.beginPath(),t.moveTo(Math.round(r[0]),Math.round(r[1])),t.lineTo(Math.round(n[0]),Math.round(n[1])),t.lineTo(Math.round(o[0]),Math.round(o[1])),t.lineTo(Math.round(s[0]),Math.round(s[1])),t.clip()}prepareContainer(t,e){let i=t.extent,r=t.viewState.resolution,n=t.viewState.rotation,o=t.pixelRatio,s=Math.round((0,u.RG)(i)/r*o),a=Math.round((0,u.Oq)(i)/r*o);(0,y.Zz)(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/o,1/o,n,-s/2,-a/2),(0,y.T9)(this.inversePixelTransform,this.pixelTransform);let l=(0,y.dI)(this.pixelTransform);if(this.useContainer(e,l,this.getBackground(t)),!this.containerReused){let t=this.context.canvas;t.width!=s||t.height!=a?(t.width=s,t.height=a):this.context.clearRect(0,0,s,a),l!==t.style.transform&&(t.style.transform=l)}}dispatchRenderEvent_(t,e,i){let r=this.getLayer();if(r.hasListener(t)){let n=new A.A(t,this.inversePixelTransform,i,e);r.dispatchEvent(n)}}preRender(t,e){this.frameState=e,e.declutter||this.dispatchRenderEvent_(L.A.PRERENDER,t,e)}postRender(t,e){e.declutter||this.dispatchRenderEvent_(L.A.POSTRENDER,t,e)}renderDeferredInternal(t){}getRenderContext(t){return t.declutter&&!this.deferredContext_&&(this.deferredContext_=new M),t.declutter?this.deferredContext_.getContext():this.context}renderDeferred(t){t.declutter&&(this.dispatchRenderEvent_(L.A.PRERENDER,this.context,t),t.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(t),this.dispatchRenderEvent_(L.A.POSTRENDER,this.context,t))}getRenderTransform(t,e,i,r,n,o,s){let a=r/e,l=-t[0]+s,h=-t[1];return(0,y.Zz)(this.tempTransform,n/2,o/2,a,-a,-i,l,h)}disposeInternal(){delete this.frameState,super.disposeInternal()}};function z(t,e,i){if(!(i in t))return t[i]=new Set([e]),!0;let r=t[i],n=r.has(e);return n||r.add(e),!n}function F(t,e){let i=t.layerStatesArray[t.layerIndex];i.extent&&(e=(0,u._N)(e,(0,g.SD)(i.extent,t.viewState.projection)));let r=i.layer.getRenderSource();if(!r.getWrapX()){let i=r.getTileGridForProjection(t.viewState.projection).getExtent();i&&(e=(0,u._N)(e,i))}return e}let D=class extends k{constructor(t,e){super(t),e=e||{},this.extentChanged=!0,this.renderComplete=!1,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedTiles=[],this.renderedSourceKey_,this.renderedSourceRevision_,this.tempExtent=(0,u.S5)(),this.tempTileRange_=new d.A(0,0,0,0),this.tempTileCoord_=(0,w.N)(0,0,0);const i=void 0!==e.cacheSize?e.cacheSize:512;this.tileCache_=new _(i),this.sourceTileCache_=null,this.layerExtent=null,this.maxStaleKeys=.5*i}getTileCache(){return this.tileCache_}getSourceTileCache(){return this.sourceTileCache_||(this.sourceTileCache_=new _(512)),this.sourceTileCache_}getOrCreateTile(t,e,i,r){let n,o=this.tileCache_,s=this.getLayer().getSource(),a=(0,w.et)(s,s.getKey(),t,e,i);if(o.containsKey(a))n=o.get(a);else{let l=r.viewState.projection,h=s.getProjection();if(!(n=s.getTile(t,e,i,r.pixelRatio,l,!h||(0,g.tI)(h,l)?void 0:this.getSourceTileCache())))return null;o.set(a,n)}return n}getTile(t,e,i,r){let n=this.getOrCreateTile(t,e,i,r);return n||null}getData(t){let e=this.frameState;if(!e)return null;let i=this.getLayer(),r=(0,y.Bb)(e.pixelToCoordinateTransform,t.slice()),s=i.getExtent();if(s&&!(0,u.Ym)(s,r))return null;let a=e.viewState,d=i.getRenderSource(),c=d.getTileGridForProjection(a.projection),g=d.getTilePixelRatio(e.pixelRatio);for(let t=c.getZForResolution(a.resolution);t>=c.getMinZoom();--t){let i,s=c.getTileCoordForCoordAndZ(r,t),u=this.getTile(t,s[1],s[2],e);if(!u||u.getState()!==n.A.LOADED)continue;let f=c.getOrigin(t),v=(0,m.xq)(c.getTileSize(t)),_=c.getResolution(t);if(u instanceof h.A||u instanceof p.A)i=u.getImage();else if(!(u instanceof l))continue;else if(!(i=o(u.getData())))continue;let w=Math.floor(g*((r[0]-f[0])/_-s[1]*v[0])),y=Math.floor(g*((f[1]-r[1])/_-s[2]*v[1])),b=Math.round(g*d.getGutterForProjection(a.projection));return this.getImageData(i,w+b,y+b)}return null}prepareFrame(t){this.renderedProjection?t.viewState.projection!==this.renderedProjection&&(this.tileCache_.clear(),this.renderedProjection=t.viewState.projection):this.renderedProjection=t.viewState.projection;let e=this.getLayer().getSource();if(!e)return!1;let i=e.getRevision();return this.renderedSourceRevision_?this.renderedSourceRevision_!==i&&(this.renderedSourceRevision_=i,this.renderedSourceKey_===e.getKey()&&(this.tileCache_.clear(),this.sourceTileCache_?.clear())):this.renderedSourceRevision_=i,!0}enqueueTilesForNextExtent(){return!0}enqueueTiles(t,e,i,r,o){let s=t.viewState,a=this.getLayer(),l=a.getRenderSource(),h=l.getTileGridForProjection(s.projection),d=(0,b.v6)(l);d in t.wantedTiles||(t.wantedTiles[d]={});let c=t.wantedTiles[d],g=a.getMapInternal(),p=Math.max(i-o,h.getMinZoom(),h.getZForResolution(Math.min(a.getMaxResolution(),g?g.getView().getResolutionForZoom(Math.max(a.getMinZoom(),0)):h.getResolution(0)),l.zDirection)),m=s.rotation,f=m?(0,u.Yw)(s.center,s.resolution,m,t.size):void 0;for(let o=i;o>=p;--o){let i=h.getTileRangeForExtentAndZ(e,o,this.tempTileRange_),s=h.getResolution(o);for(let e=i.minX;e<=i.maxX;++e)for(let a=i.minY;a<=i.maxY;++a){if(m&&!h.tileCoordIntersectsViewport([o,e,a],f))continue;let i=this.getTile(o,e,a,t);if(!i||!z(r,i,o))continue;let l=i.getKey();if(c[l]=!0,i.getState()===n.A.IDLE&&!t.tileQueue.isKeyQueued(l)){let r=(0,w.N)(o,e,a,this.tempTileCoord_);t.tileQueue.enqueue([i,d,h.getTileCoordCenter(r),s])}}}}findStaleTile_(t,e){let i=this.tileCache_,r=t[0],o=t[1],s=t[2],a=this.getStaleKeys();for(let t=0;t<a.length;++t){let l=(0,w.et)(this.getLayer().getSource(),a[t],r,o,s);if(i.containsKey(l)){let t=i.peek(l);if(t.getState()===n.A.LOADED)return t.endTransition((0,b.v6)(this)),z(e,t,r),!0}}return!1}findAltTiles_(t,e,i,r){let o=t.getTileRangeForTileCoordAndZ(e,i,this.tempTileRange_);if(!o)return!1;let s=!0,a=this.tileCache_,l=this.getLayer().getRenderSource(),h=l.getKey();for(let t=o.minX;t<=o.maxX;++t)for(let e=o.minY;e<=o.maxY;++e){let o=(0,w.et)(l,h,i,t,e),d=!1;if(a.containsKey(o)){let t=a.peek(o);t.getState()===n.A.LOADED&&(z(r,t,i),d=!0)}d||(s=!1)}return s}renderFrame(t,e){let i;this.renderComplete=!0;let r=t.layerStatesArray[t.layerIndex],o=t.viewState,s=o.projection,a=o.resolution,l=o.center,h=t.pixelRatio,d=this.getLayer(),p=d.getSource(),m=p.getTileGridForProjection(s),f=m.getZForResolution(a,p.zDirection),v=m.getResolution(f),_=p.getKey();this.renderedSourceKey_?this.renderedSourceKey_!==_&&(this.prependStaleKey(this.renderedSourceKey_),this.renderedSourceKey_=_):this.renderedSourceKey_=_;let w=t.extent,C=p.getTilePixelRatio(h);this.prepareContainer(t,e);let x=this.context.canvas.width,E=this.context.canvas.height;this.layerExtent=r.extent?(0,g.SD)(r.extent,s):null,this.layerExtent&&(w=(0,u._N)(w,this.layerExtent));let A=v*x/2/C,L=v*E/2/C,M=[l[0]-A,l[1]-L,l[0]+A,l[1]+L],R={};this.renderedTiles.length=0;let S=d.getPreload();if(t.nextExtent&&this.enqueueTilesForNextExtent()){let e=m.getZForResolution(o.nextResolution,p.zDirection),i=F(t,t.nextExtent);this.enqueueTiles(t,i,e,R,S)}let T=F(t,w);if(this.enqueueTiles(t,T,f,R,0),S>0&&setTimeout(()=>{this.enqueueTiles(t,T,f-1,R,S-1)},0),!(f in R))return this.container;let I=(0,b.v6)(this),P=t.time;for(let e of R[f]){let i=e.getState();if(i===n.A.EMPTY)continue;let r=e.tileCoord;if(i===n.A.LOADED&&1===e.getAlpha(I,P)){e.endTransition(I);continue}if(i!==n.A.ERROR&&(this.renderComplete=!1),this.findStaleTile_(r,R)){!function(t,e,i){let r=t[i];r&&r.delete(e)}(R,e,f),t.animate=!0;continue}if(this.findAltTiles_(m,r,f+1,R))continue;let o=m.getMinZoom();for(let t=f-1;t>=o&&!this.findAltTiles_(m,r,t,R);--t);}let O=v/a*h/C,k=this.getRenderContext(t);(0,y.Zz)(this.tempTransform,x/2,E/2,O,O,0,-x/2,-E/2),this.layerExtent&&this.clipUnrotated(k,t,this.layerExtent),p.getInterpolate()||(k.imageSmoothingEnabled=!1),this.preRender(k,t);let z=Object.keys(R).map(Number);z.sort(c.V_);let D=[],$=[];for(let e=z.length-1;e>=0;--e){let r=z[e],o=p.getTilePixelSize(r,h,s),a=m.getResolution(r)/v,l=o[0]*a*O,d=o[1]*a*O,c=m.getTileCoordForCoordAndZ((0,u.Py)(M),r),g=m.getTileCoordExtent(c),f=(0,y.Bb)(this.tempTransform,[C*(g[0]-M[0])/v,C*(M[3]-g[3])/v]),_=C*p.getGutterForProjection(s);for(let e of R[r]){if(e.getState()!==n.A.LOADED)continue;let o=e.tileCoord,s=c[1]-o[1],a=Math.round(f[0]-(s-1)*l),h=c[2]-o[2],g=Math.round(f[1]-(h-1)*d),m=Math.round(f[0]-s*l),v=Math.round(f[1]-h*d),w=a-m,y=g-v,b=1===z.length,C=!1;i=[m,v,m+w,v,m+w,v+y,m,v+y];for(let t=0,e=D.length;t<e;++t)if(!b&&r<$[t]){let e=D[t];(0,u.HY)([m,v,m+w,v+y],[e[0],e[3],e[4],e[7]])&&(C||(k.save(),C=!0),k.beginPath(),k.moveTo(i[0],i[1]),k.lineTo(i[2],i[3]),k.lineTo(i[4],i[5]),k.lineTo(i[6],i[7]),k.moveTo(e[6],e[7]),k.lineTo(e[4],e[5]),k.lineTo(e[2],e[3]),k.lineTo(e[0],e[1]),k.clip())}D.push(i),$.push(r),this.drawTile(e,t,m,v,w,y,_,b),C&&k.restore(),this.renderedTiles.unshift(e),this.updateUsedTiles(t.usedTiles,p,e)}}if(this.renderedResolution=v,this.extentChanged=!this.renderedExtent_||!(0,u.aI)(this.renderedExtent_,M),this.renderedExtent_=M,this.renderedPixelRatio=h,this.postRender(this.context,t),this.layerExtent&&k.restore(),k.imageSmoothingEnabled=!0,this.renderComplete){let e=(t,e)=>{let i=(0,b.v6)(p),r=e.wantedTiles[i],n=r?Object.keys(r).length:0;this.updateCacheSize(n),this.tileCache_.expireCache(),this.sourceTileCache_?.expireCache()};t.postRenderFunctions.push(e)}return this.container}updateCacheSize(t){this.tileCache_.highWaterMark=Math.max(this.tileCache_.highWaterMark,2*t)}drawTile(t,e,i,r,n,s,a,h){let d;if(t instanceof l){if(!(d=o(t.getData())))throw Error("Rendering array data is not yet supported")}else d=this.getTileImage(t);if(!d)return;let c=this.getRenderContext(e),u=(0,b.v6)(this),g=e.layerStatesArray[e.layerIndex],p=g.opacity*(h?t.getAlpha(u,e.time):1),m=p!==c.globalAlpha;m&&(c.save(),c.globalAlpha=p),c.drawImage(d,a,a,d.width-2*a,d.height-2*a,i,r,n,s),m&&c.restore(),p!==g.opacity?e.animate=!0:h&&t.endTransition(u)}getImage(){let t=this.context;return t?t.canvas:null}getTileImage(t){return t.getImage()}updateUsedTiles(t,e,i){let r=(0,b.v6)(e);r in t||(t[r]={}),t[r][i.getKey()]=!0}};var $=i(9323);let N="preload",B="useInterimTilesOnError";class V extends $.A{constructor(t){const e=Object.assign({},t=t||{}),i=t.cacheSize;delete t.cacheSize,delete e.preload,delete e.useInterimTilesOnError,super(e),this.on,this.once,this.un,this.cacheSize_=i,this.setPreload(void 0!==t.preload?t.preload:0),this.setUseInterimTilesOnError(void 0===t.useInterimTilesOnError||t.useInterimTilesOnError)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(N)}setPreload(t){this.set(N,t)}getUseInterimTilesOnError(){return this.get(B)}setUseInterimTilesOnError(t){this.set(B,t)}getData(t){return super.getData(t)}}let q=V,K=class extends q{constructor(t){super(t)}createRenderer(){return new D(this,{cacheSize:this.getCacheSize()})}}},76(t,e,i){function r(t,e,i){return Math.min(Math.max(t,e),i)}function n(t,e,i,r,n,s){let a=n-i,l=s-r;if(0!==a||0!==l){let o=((t-i)*a+(e-r)*l)/(a*a+l*l);o>1?(i=n,r=s):o>0&&(i+=a*o,r+=l*o)}return o(t,e,i,r)}function o(t,e,i,r){let n=i-t,o=r-e;return n*n+o*o}function s(t){let e=t.length;for(let i=0;i<e;i++){let r=i,n=Math.abs(t[i][i]);for(let o=i+1;o<e;o++){let e=Math.abs(t[o][i]);e>n&&(n=e,r=o)}if(0===n)return null;let o=t[r];t[r]=t[i],t[i]=o;for(let r=i+1;r<e;r++){let n=-t[r][i]/t[i][i];for(let o=i;o<e+1;o++)i==o?t[r][o]=0:t[r][o]+=n*t[i][o]}}let i=Array(e);for(let r=e-1;r>=0;r--){i[r]=t[r][e]/t[r][r];for(let n=r-1;n>=0;n--)t[n][e]-=t[n][r]*i[r]}return i}function a(t){return 180*t/Math.PI}function l(t){return t*Math.PI/180}function h(t,e){let i=t%e;return i*e<0?i+e:i}function d(t,e,i){return t+i*(e-t)}function c(t,e){let i=Math.pow(10,e);return Math.round(t*i)/i}function u(t,e){return Math.floor(c(t,e))}function g(t,e){return Math.ceil(c(t,e))}function p(t,e,i){if(t>=e&&t<i)return t;let r=i-e;return((t-e)%r+r)%r+e}i.d(e,{Cc:()=>d,KU:()=>s,LV:()=>p,Mg:()=>c,Q1:()=>n,RI:()=>u,eh:()=>l,hG:()=>o,mk:()=>g,qE:()=>r,xP:()=>h,xW:()=>a})},8509(t,e,i){function r(t){for(let e in t)delete t[e]}function n(t){let e;for(e in t)return!1;return!e}i.d(e,{I:()=>r,p:()=>n})},5054(t,e,i){i.d(e,{},{A:{POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}})},793(t,e,i){i.d(e,{Ig:()=>l,MF:()=>h,bF:()=>Q,Av:()=>tr,HU:()=>tn,RJ:()=>X,tI:()=>to,Ad:()=>tu,SD:()=>tp,Jt:()=>tt,hO:()=>te,RG:()=>tl,FO:()=>ts,Tf:()=>td,R6:()=>J,te:()=>tc,JR:()=>tg,pd:()=>th});var r,n,o=i(717),s=i(832),a=i(7862);let l={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937},h=class{constructor(t){this.code_=t.code,this.units_=t.units,this.extent_=void 0!==t.extent?t.extent:null,this.worldExtent_=void 0!==t.worldExtent?t.worldExtent:null,this.axisOrientation_=void 0!==t.axisOrientation?t.axisOrientation:"enu",this.global_=void 0!==t.global&&t.global,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||l[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(t){this.defaultTileGrid_=t}setExtent(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)}setWorldExtent(t){this.worldExtent_=t}setGetPointResolution(t){this.getPointResolutionFunc_=t}getPointResolutionFunc(){return this.getPointResolutionFunc_}},d=6378137*Math.PI,c=[-d,-d,d,d],u=[-180,-85,180,85],g=6378137*Math.log(Math.tan(Math.PI/2));class p extends h{constructor(t){super({code:t,units:"m",extent:c,global:!0,worldExtent:u,getPointResolution:function(t,e){return t/Math.cosh(e[1]/6378137)}})}}let m=[new p("EPSG:3857"),new p("EPSG:102100"),new p("EPSG:102113"),new p("EPSG:900913"),new p("http://www.opengis.net/def/crs/EPSG/0/3857"),new p("http://www.opengis.net/gml/srs/epsg.xml#3857")],f=[-180,-90,180,90],v=6378137*Math.PI/180;class _ extends h{constructor(t,e){super({code:t,units:"degrees",extent:f,axisOrientation:e,global:!0,metersPerUnit:v,worldExtent:f})}}let w=[new _("CRS:84"),new _("EPSG:4326","neu"),new _("urn:ogc:def:crs:OGC:1.3:CRS84"),new _("urn:ogc:def:crs:OGC:2:84"),new _("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new _("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new _("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],y={},b={};function C(t,e,i){let r=t.getCode(),n=e.getCode();r in b||(b[r]={}),b[r][n]=i}function x(t,e){return t in b&&e in b[t]?b[t][e]:null}var E=i(76);let A=.00669438/.99330562,L=Math.sqrt(.99330562),M=(1-L)/(1+L),R=M*M,S=R*M,T=S*M,I=T*M,P=1-.001673595-1344441707532e-16/64-15000339463446782e-22/256,O=.02008314/8+1344441707532e-16/32+13500305517102105e-21/1024,k=672220853766e-15/256+13500305517102105e-21/1024,z=10500237624412747e-21/3072,F=1.5*M-27/32*S+269/512*I,D=21/16*R-55/32*T,$=151/96*S-417/128*I,N=1097/512*T;function B(t,e,i){let r=(i.north?e:e-1e7)/.9996/(6378137*P),n=r+F*Math.sin(2*r)+D*Math.sin(4*r)+$*Math.sin(6*r)+N*Math.sin(8*r),o=Math.sin(n),s=o*o,a=Math.cos(n),l=o/a,h=l*l,d=h*h,c=A*a**2,u=c*c,g=(t-5e5)/(6378137/Math.sqrt(1-.00669438*s)*.9996),p=g*g,m=p*g,f=m*g,v=f*g,_=n-l/(.99330562/(1-.00669438*s))*(p/2-f/24*(5+3*h+10*c-4*u-9*A))+v*g/720*(61+90*h+298*c+45*d-252*A-3*u),w=(g-m/6*(1+2*h+c)+v/120*(5-2*c+28*h-3*u+8*A+24*d))/a;return w=(0,E.LV)(w+(0,E.eh)(q(i.number)),-Math.PI,Math.PI),[(0,E.xW)(w),(0,E.xW)(_)]}function V(t,e,i){t=(0,E.LV)(t,-180,180),e<-80?e=-80:e>84&&(e=84);let r=(0,E.eh)(e),n=Math.sin(r),o=Math.cos(r),s=n/o,a=s*s,l=a*a,h=(0,E.eh)(t),d=q(i.number),c=(0,E.eh)(d),u=6378137/Math.sqrt(1-.00669438*n**2),g=A*o**2,p=o*(0,E.LV)(h-c,-Math.PI,Math.PI),m=p*p,f=m*p,v=f*p,_=v*p,w=.9996*u*(p+f/6*(1-a+g)+_/120*(5-18*a+l+72*g-58*A))+5e5,y=.9996*(6378137*(P*r-O*Math.sin(2*r)+k*Math.sin(4*r)-z*Math.sin(6*r))+u*s*(m/2+v/24*(5-a+9*g+4*g**2)+_*p/720*(61-58*a+l+600*g-330*A)));return i.north||(y+=1e7),[w,y]}function q(t){return(t-1)*6-180+3}let K=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];function U(t){let e=0;for(let i of K){let r=t.match(i);if(r){e=parseInt(r[1]);break}}if(!e)return null;let i=0,r=!1;return(e>32700&&e<32761?i=e-32700:e>32600&&e<32661&&(r=!0,i=e-32600),i)?{number:i,north:r}:null}function Z(t,e){return function(i,r,n,o){let s=i.length;n=n>1?n:2,o=o??n,r||(r=n>2?i.slice():Array(s));for(let n=0;n<s;n+=o){let o=t(i[n],i[n+1],e);r[n]=o[0],r[n+1]=o[1]}return r}}function j(t,e,i){i=i||6371008.8;let r=(0,E.eh)(t[1]),n=(0,E.eh)(e[1]),o=(n-r)/2,s=(0,E.eh)(e[0]-t[0])/2,a=Math.sin(o)*Math.sin(o)+Math.sin(s)*Math.sin(s)*Math.cos(r)*Math.cos(n);return 2*i*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}let H=[function(t){let e=U(t.getCode());return e?{forward:Z(V,e),inverse:Z(B,e)}:null}],G=[function(t){return U(t)?new h({code:t,units:"m"}):null}],W=!0;function X(t){W=!(void 0===t||t)}function Y(t,e){if(void 0!==e)for(let i=0,r=t.length;i<r;++i)e[i]=t[i];else e=t.slice();return e}function J(t,e){if(void 0!==e&&t!==e){for(let i=0,r=t.length;i<r;++i)e[i]=t[i];t=e}return t}function Q(t){var e;e=t.getCode(),y[e]=t,C(t,t,Y)}function tt(t){if("string"!=typeof t)return t;let e=y[t]||y[t.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null;if(e)return e;for(let e of G){let i=e(t);if(i)return i}return null}function te(t,e,i,r){let n,o=(t=tt(t)).getPointResolutionFunc();if(o){if(n=o(e,i),r&&r!==t.getUnits()){let e=t.getMetersPerUnit();e&&(n=n*e/l[r])}}else{let o=t.getUnits();if(("degrees"!=o||r)&&"degrees"!=r){let s=ts(t,tt("EPSG:4326"));if(s||"degrees"===o){let t=[i[0]-e/2,i[1],i[0]+e/2,i[1],i[0],i[1]-e/2,i[0],i[1]+e/2];n=(j((t=s(t,t,2)).slice(0,2),t.slice(2,4))+j(t.slice(4,6),t.slice(6,8)))/2}else n=e*t.getMetersPerUnit();let a=r?l[r]:t.getMetersPerUnit();void 0!==a&&(n/=a)}else n=e}return n}function ti(t){t.forEach(Q),t.forEach(function(e){t.forEach(function(t){e!==t&&C(e,t,Y)})})}function tr(t,e){return t?"string"==typeof t?tt(t):t:tt(e)}function tn(t){return function(e,i,r,n){let o=e.length;r=void 0!==r?r:2,n=n??r,i=void 0!==i?i:Array(o);for(let s=0;s<o;s+=n){let o=t(e.slice(s,s+r)),a=o.length;for(let t=0,r=n;t<r;++t)i[s+t]=t>=a?e[s+t]:o[t]}return i}}function to(t,e){if(t===e)return!0;let i=t.getUnits()===e.getUnits();return t.getCode()===e.getCode()?i:ts(t,e)===Y&&i}function ts(t,e){let i=t.getCode(),r=e.getCode(),n=x(i,r);if(n)return n;let o=null,s=null;for(let i of H)o||(o=i(t)),s||(s=i(e));if(!o&&!s)return null;let a="EPSG:4326";if(s)if(o)n=ta(o.inverse,s.forward);else{let t=x(i,a);t&&(n=ta(t,s.forward))}else{let t=x(a,r);t&&(n=ta(o.inverse,t))}return n&&(Q(t),Q(e),C(t,e,n)),n}function ta(t,e){return function(i,r,n,o){return e(r=t(i,r,n,o),r,n,o)}}function tl(t,e){return ts(tt(t),tt(e))}function th(t,e,i){let r=tl(e,i);if(!r){let t=tt(e).getCode(),r=tt(i).getCode();throw Error(`No transform available between ${t} and ${r}`)}return r(t,void 0,t.length)}function td(){return null}function tc(t,e){return t}function tu(t,e){return W&&!(0,s.aI)(t,[0,0])&&t[0]>=-180&&t[0]<=180&&t[1]>=-90&&t[1]<=90&&(W=!1,(0,o.R8)("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),t}function tg(t,e){return t}function tp(t,e){return t}ti(m),ti(w),r=function(t,e,i,r){let n=t.length;i=i>1?i:2,r=r??i,void 0===e&&(e=i>2?t.slice():Array(n));for(let i=0;i<n;i+=r){e[i]=d*t[i]/180;let r=6378137*Math.log(Math.tan(Math.PI*(+t[i+1]+90)/360));r>g?r=g:r<-g&&(r=-g),e[i+1]=r}return e},n=function(t,e,i,r){let n=t.length;i=i>1?i:2,r=r??i,void 0===e&&(e=i>2?t.slice():Array(n));for(let i=0;i<n;i+=r)e[i]=180*t[i]/d,e[i+1]=360*Math.atan(Math.exp(t[i+1]/6378137))/Math.PI-90;return e},w.forEach(function(t){m.forEach(function(e){C(t,e,r),C(e,t,n)})})},4757(t,e,i){var r=i(7736);class n extends r.Ay{constructor(t,e,i,r){super(t),this.inversePixelTransform=e,this.frameState=i,this.context=r}}i.d(e,{},{A:n})},3477(t,e,i){i.d(e,{},{A:{PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"}})},5858(t,e,i){let r;i.d(e,{A:()=>w});var n=i(6410),o=i(9925),s=i(7344),a=i(8291),l=i(1280),h=i(7862),d=i(76),c=i(793);let u=[];function g(t,e,i,r,n){t.beginPath(),t.moveTo(0,0),t.lineTo(e,i),t.lineTo(r,n),t.closePath(),t.save(),t.clip(),t.fillRect(0,0,Math.max(e,r)+1,Math.max(i,n)),t.restore()}function p(t,e){return Math.abs(t[4*e]-210)>2||Math.abs(t[4*e+3]-191.25)>2}function m(t,e,i,r){let n=(0,c.pd)(i,e,t),o=(0,c.hO)(e,r,i),s=e.getMetersPerUnit();void 0!==s&&(o*=s);let a=t.getMetersPerUnit();void 0!==a&&(o/=a);let l=t.getExtent();if(!l||(0,h.Ym)(l,n)){let e=(0,c.hO)(t,o,n)/o;isFinite(e)&&e>0&&(o/=e)}return o}var f=i(2416);let v=class{constructor(t,e,i,r,n,o,s){this.sourceProj_=t,this.targetProj_=e;let a={};const l=s?(0,c.HU)(t=>(0,f.Bb)(s,(0,c.pd)(t,this.targetProj_,this.sourceProj_))):(0,c.RG)(this.targetProj_,this.sourceProj_);this.transformInv_=function(t){let e=t[0]+"/"+t[1];return a[e]||(a[e]=l(t)),a[e]},this.maxSourceExtent_=r,this.errorThresholdSquared_=n*n,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&(0,h.RG)(r)>=(0,h.RG)(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?(0,h.RG)(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?(0,h.RG)(this.targetProj_.getExtent()):null;const d=(0,h.Py)(i),u=(0,h.WU)(i),g=(0,h.k_)(i),p=(0,h.R)(i),m=this.transformInv_(d),v=this.transformInv_(u),_=this.transformInv_(g),w=this.transformInv_(p),y=10+(o?Math.max(0,Math.ceil(Math.log2((0,h.UG)(i)/(o*o*65536)))):0);if(this.addQuad_(d,u,g,p,m,v,_,w,y),this.wrapsXInSource_){let t=1/0;this.triangles_.forEach(function(e,i,r){t=Math.min(t,e.source[0][0],e.source[1][0],e.source[2][0])}),this.triangles_.forEach(e=>{if(Math.max(e.source[0][0],e.source[1][0],e.source[2][0])-t>this.sourceWorldWidth_/2){let i=[[e.source[0][0],e.source[0][1]],[e.source[1][0],e.source[1][1]],[e.source[2][0],e.source[2][1]]];i[0][0]-t>this.sourceWorldWidth_/2&&(i[0][0]-=this.sourceWorldWidth_),i[1][0]-t>this.sourceWorldWidth_/2&&(i[1][0]-=this.sourceWorldWidth_),i[2][0]-t>this.sourceWorldWidth_/2&&(i[2][0]-=this.sourceWorldWidth_);let r=Math.min(i[0][0],i[1][0],i[2][0]);Math.max(i[0][0],i[1][0],i[2][0])-r<this.sourceWorldWidth_/2&&(e.source=i)}})}a={}}addTriangle_(t,e,i,r,n,o){this.triangles_.push({source:[r,n,o],target:[t,e,i]})}addQuad_(t,e,i,r,n,o,s,a,l){let c=(0,h.Tr)([n,o,s,a]),u=this.sourceWorldWidth_?(0,h.RG)(c)/this.sourceWorldWidth_:null,g=this.sourceWorldWidth_,p=this.sourceProj_.canWrapX()&&u>.5&&u<1,m=!1;if(l>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){let n=(0,h.Tr)([t,e,i,r]);m=(0,h.RG)(n)/this.targetWorldWidth_>.25||m}!p&&this.sourceProj_.isGlobal()&&u&&(m=u>.25||m)}if(!m&&this.maxSourceExtent_&&isFinite(c[0])&&isFinite(c[1])&&isFinite(c[2])&&isFinite(c[3])&&!(0,h.HY)(c,this.maxSourceExtent_))return;let f=0;if(!m&&(!isFinite(n[0])||!isFinite(n[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(s[0])||!isFinite(s[1])||!isFinite(a[0])||!isFinite(a[1]))){if(l>0)m=!0;else if(1!=(f=8*!(isFinite(n[0])&&isFinite(n[1]))+4*!(isFinite(o[0])&&isFinite(o[1]))+2*!(isFinite(s[0])&&isFinite(s[1]))+ +!(isFinite(a[0])&&isFinite(a[1])))&&2!=f&&4!=f&&8!=f)return}if(l>0){if(!m){let e,r=[(t[0]+i[0])/2,(t[1]+i[1])/2],o=this.transformInv_(r);e=p?((0,d.xP)(n[0],g)+(0,d.xP)(s[0],g))/2-(0,d.xP)(o[0],g):(n[0]+s[0])/2-o[0];let a=(n[1]+s[1])/2-o[1];m=e*e+a*a>this.errorThresholdSquared_}if(m){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){let h=[(e[0]+i[0])/2,(e[1]+i[1])/2],d=this.transformInv_(h),c=[(r[0]+t[0])/2,(r[1]+t[1])/2],u=this.transformInv_(c);this.addQuad_(t,e,h,c,n,o,d,u,l-1),this.addQuad_(c,h,i,r,u,d,s,a,l-1)}else{let h=[(t[0]+e[0])/2,(t[1]+e[1])/2],d=this.transformInv_(h),c=[(i[0]+r[0])/2,(i[1]+r[1])/2],u=this.transformInv_(c);this.addQuad_(t,h,c,r,n,d,u,a,l-1),this.addQuad_(h,e,i,c,d,o,s,u,l-1)}return}}if(p){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(11&f)==0&&this.addTriangle_(t,i,r,n,s,a),(14&f)==0&&this.addTriangle_(t,i,e,n,s,o),f&&((13&f)==0&&this.addTriangle_(e,r,t,o,a,n),(7&f)==0&&this.addTriangle_(e,r,i,o,a,s))}calculateSourceExtent(){let t=(0,h.S5)();return this.triangles_.forEach(function(e,i,r){let n=e.source;(0,h.$C)(t,n[0]),(0,h.$C)(t,n[1]),(0,h.$C)(t,n[2])}),t}getTriangles(){return this.triangles_}};class _ extends n.A{constructor(t,e,i,r,n,s,a,l,c,u,g,p){super(n,o.A.IDLE,p),this.renderEdges_=void 0!==g&&g,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=e,this.targetTileGrid_=r,this.wrappedTileCoord_=s||n,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=t.canWrapX()?t.getExtent():void 0;const f=r.getTileCoordExtent(this.wrappedTileCoord_),_=this.targetTileGrid_.getExtent();let w=this.sourceTileGrid_.getExtent();const y=_?(0,h._N)(f,_):f;if(0===(0,h.UG)(y)){this.state=o.A.EMPTY;return}const b=t.getExtent();b&&(w=w?(0,h._N)(w,b):b);const C=r.getResolution(this.wrappedTileCoord_[0]),x=function(t,e,i,r){let n=m(t,e,(0,h.q1)(i),r);return(!isFinite(n)||n<=0)&&(0,h.sB)(i,function(i){return isFinite(n=m(t,e,i,r))&&n>0}),n}(t,i,y,C);if(!isFinite(x)||x<=0||(this.triangulation_=new v(t,i,y,w,x*(void 0!==u?u:.5),C),0===this.triangulation_.getTriangles().length)){this.state=o.A.EMPTY;return}this.sourceZ_=e.getZForResolution(x);let E=this.triangulation_.calculateSourceExtent();if(w&&(t.canWrapX()?(E[1]=(0,d.qE)(E[1],w[1],w[3]),E[3]=(0,d.qE)(E[3],w[1],w[3])):E=(0,h._N)(E,w)),(0,h.UG)(E)){let i=0,r=0;t.canWrapX()&&(i=(0,h.RG)(b),r=Math.floor((E[0]-b[0])/i)),(0,h.QJ)(E.slice(),t,!0).forEach(t=>{let n=e.getTileRangeForExtentAndZ(t,this.sourceZ_);for(let t=n.minX;t<=n.maxX;t++)for(let e=n.minY;e<=n.maxY;e++){let n=r*i;this.sourceTiles_.push({getTile:()=>c(this.sourceZ_,t,e,a),offset:n})}++r}),0===this.sourceTiles_.length&&(this.state=o.A.EMPTY)}else this.state=o.A.EMPTY}getImage(){return this.canvas_}reproject_(){let t=[];if(this.sourceTiles_.forEach(e=>{let i=e.tile;if(i&&i.getState()==o.A.LOADED){let r=this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);r[0]+=e.offset,r[2]+=e.offset;let n=this.clipExtent_?.slice();n&&(n[0]+=e.offset,n[2]+=e.offset),t.push({extent:r,clipExtent:n,image:i.getImage()})}}),this.sourceTiles_.length=0,0===t.length)this.state=o.A.ERROR;else{let e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),n="number"==typeof i?i:i[0],a="number"==typeof i?i:i[1],l=this.targetTileGrid_.getResolution(e),c=this.sourceTileGrid_.getResolution(this.sourceZ_),m=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=function(t,e,i,n,o,a,l,c,m,f,v,_){let w,y=(0,s.Y)(Math.round(i*t),Math.round(i*e),u);if(_||(y.imageSmoothingEnabled=!1),0===m.length)return y.canvas;function b(t){return Math.round(t*i)/i}y.scale(i,i),y.globalCompositeOperation="lighter";let C=(0,h.S5)();m.forEach(function(t,e,i){(0,h.X$)(C,t.extent)});let x=i/n,E=(_?1:1.0000000596046448)/x;w=(0,s.Y)(Math.round((0,h.RG)(C)*x),Math.round((0,h.Oq)(C)*x),u),_||(w.imageSmoothingEnabled=!1),m.forEach(function(t,e,i){if(t.image.width>0&&t.image.height>0){if(t.clipExtent){w.save();let e=(t.clipExtent[0]-C[0])*x,i=-(t.clipExtent[3]-C[3])*x,r=(0,h.RG)(t.clipExtent)*x,n=(0,h.Oq)(t.clipExtent)*x;w.rect(_?e:Math.round(e),_?i:Math.round(i),_?r:Math.round(e+r)-Math.round(e),_?n:Math.round(i+n)-Math.round(i)),w.clip()}let e=(t.extent[0]-C[0])*x,i=-(t.extent[3]-C[3])*x,r=(0,h.RG)(t.extent)*x,n=(0,h.Oq)(t.extent)*x;w.drawImage(t.image,f,f,t.image.width-2*f,t.image.height-2*f,_?e:Math.round(e),_?i:Math.round(i),_?r:Math.round(e+r)-Math.round(e),_?n:Math.round(i+n)-Math.round(i)),t.clipExtent&&w.restore()}});let A=(0,h.Py)(l);return c.getTriangles().forEach(function(t,e,i){let n,o=t.source,l=t.target,c=o[0][0],f=o[0][1],v=o[1][0],x=o[1][1],L=o[2][0],M=o[2][1],R=b((l[0][0]-A[0])/a),S=b(-(l[0][1]-A[1])/a),T=b((l[1][0]-A[0])/a),I=b(-(l[1][1]-A[1])/a),P=b((l[2][0]-A[0])/a),O=b(-(l[2][1]-A[1])/a),k=c,z=f;c=0,f=0;let F=[[v-=k,x-=z,0,0,T-R],[L-=k,M-=z,0,0,P-R],[0,0,v,x,I-S],[0,0,L,M,O-S]],D=(0,d.KU)(F);if(D){if(y.save(),y.beginPath(),function(){if(void 0===r){let t=(0,s.Y)(6,6,u);t.globalCompositeOperation="lighter",t.fillStyle="rgba(210, 0, 0, 0.75)",g(t,4,5,4,0),g(t,4,5,0,5);let e=t.getImageData(0,0,3,3).data;r=p(e,0)||p(e,4)||p(e,8),(0,s.Yg)(t),u.push(t.canvas)}return r}()||!_){y.moveTo(T,I);let t=R-T,e=S-I;for(let i=0;i<4;i++)y.lineTo(T+b((i+1)*t/4),I+b(i*e/3)),3!=i&&y.lineTo(T+b((i+1)*t/4),I+b((i+1)*e/3));y.lineTo(P,O)}else y.moveTo(T,I),y.lineTo(R,S),y.lineTo(P,O);if(y.clip(),y.transform(D[0],D[2],D[1],D[3],R,S),y.translate(C[0]-k,C[3]-z),w)n=w.canvas,y.scale(E,-E);else{let t=m[0],e=t.extent;n=t.image,y.scale((0,h.RG)(e)/n.width,-(0,h.Oq)(e)/n.height)}y.drawImage(n,0,0),y.restore()}}),w&&((0,s.Yg)(w),u.push(w.canvas)),v&&(y.save(),y.globalCompositeOperation="source-over",y.strokeStyle="black",y.lineWidth=1,c.getTriangles().forEach(function(t,e,i){let r=t.target,n=(r[0][0]-A[0])/a,o=-(r[0][1]-A[1])/a,s=(r[1][0]-A[0])/a,l=-(r[1][1]-A[1])/a,h=(r[2][0]-A[0])/a,d=-(r[2][1]-A[1])/a;y.beginPath(),y.moveTo(s,l),y.lineTo(n,o),y.lineTo(h,d),y.closePath(),y.stroke()}),y.restore()),y.canvas}(n,a,this.pixelRatio_,c,this.sourceTileGrid_.getExtent(),l,m,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=o.A.LOADED}this.changed()}load(){for(let t of this.sourceTiles_)t.tile=t.getTile();if(this.state==o.A.IDLE){this.state=o.A.LOADING,this.changed();let t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:e})=>{let i=e.getState();if(i==o.A.IDLE||i==o.A.LOADING){t++;let i=(0,a.KT)(e,l.A.CHANGE,r=>{let n=e.getState();(n==o.A.LOADED||n==o.A.ERROR||n==o.A.EMPTY)&&((0,a.JH)(i),0==--t&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(i)}}),0===t?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:t},e,i){t.getState()==o.A.IDLE&&t.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(a.JH),this.sourcesListenerKeys_=null}release(){this.canvas_&&((0,s.Yg)(this.canvas_.getContext("2d")),u.push(this.canvas_),this.canvas_=null),this.sourceTiles_.length=0,super.release()}}let w=_},8667(t,e,i){var r=i(76);function n(t){if(void 0!==t)return 0}function o(t){if(void 0!==t)return t}function s(t){let e=2*Math.PI/t;return function(t,i){return i?t:void 0!==t?t=Math.floor(t/e+.5)*e:void 0}}function a(t){let e=void 0===t?(0,r.eh)(5):t;return function(t,i){return i||void 0===t?t:Math.abs(t)<=e?0:t}}i.d(e,{a$:()=>s,b8:()=>n,cq:()=>a,dv:()=>o})},7003(t,e,i){function r(t){return t[0]>0&&t[1]>0}function n(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]*e+.5|0,i[1]=t[1]*e+.5|0,i}function o(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:(e[0]=t,e[1]=t),e)}i.d(e,{Ie:()=>r,hs:()=>n,xq:()=>o})},8009(t,e,i){i.d(e,{A:()=>P});var r=i(7862),n=i(793),o=i(7003),s=i(8549);function a(t){let e=t.getDefaultTileGrid();return e||(e=function(t){var e,i;let n;return e=h(t),i=(i=void 0,"top-left"),n=l(e,void 0,void 0),new s.A({extent:e,origin:(0,r.qF)(e,i),resolutions:n,tileSize:void 0})}(t),t.setDefaultTileGrid(e)),e}function l(t,e,i,n){e=void 0!==e?e:42,i=(0,o.xq)(void 0!==i?i:256);let s=(0,r.Oq)(t),a=(0,r.RG)(t);n=n>0?n:Math.max(a/i[0],s/i[1]);let l=e+1,h=Array(l);for(let t=0;t<l;++t)h[t]=n/Math.pow(2,t);return h}function h(t){let e=(t=(0,n.Jt)(t)).getExtent();if(!e){let i=180*n.Ig.degrees/t.getMetersPerUnit();e=(0,r.N)(-i,-i,i,i)}return e}var d=i(9713),c=i(9925),u=i(1280),g=i(7664),p=i(5858),m=i(5549),f=i(2298),v=i(76);let _=/\{z\}/g,w=/\{x\}/g,y=/\{y\}/g,b=/\{-y\}/g;var C=i(7736),x=i(8933);class E extends x.A{constructor(t){super(),this.projection=(0,n.Jt)(t.projection),this.attributions_=A(t.attributions),this.attributionsCollapsible_=t.attributionsCollapsible??!0,this.loading=!1,this.state_=void 0!==t.state?t.state:"ready",this.wrapX_=void 0!==t.wrapX&&t.wrapX,this.interpolate_=!!t.interpolate,this.viewResolver=null,this.viewRejector=null;const e=this;this.viewPromise_=new Promise(function(t,i){e.viewResolver=t,e.viewRejector=i})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(t){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(t){this.attributions_=A(t),this.changed()}setState(t){this.state_=t,this.changed()}}function A(t){return t?"function"==typeof t?t:(Array.isArray(t)||(t=[t]),e=>t):null}let L=E;class M extends C.Ay{constructor(t,e){super(t),this.tile=e}}let R=class extends L{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=void 0!==t.tilePixelRatio?t.tilePixelRatio:1,this.tileGrid=void 0!==t.tileGrid?t.tileGrid:null,this.tileGrid&&(0,o.xq)(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),[256,256]),this.tmpSize=[0,0],this.key_=t.key||(0,f.v6)(this),this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getResolutions(t){let e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,r,n,o){return(0,f.b0)()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:a(t)}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){let r=this.getTileGridForProjection(i),n=this.getTilePixelRatio(e),s=(0,o.xq)(r.getTileSize(t),this.tmpSize);return 1==n?s:(0,o.hs)(s,n,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){let i=void 0!==e?e:this.getProjection(),n=void 0!==e?this.getTileGridForProjection(i):this.tileGrid||this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(t=function(t,e,i){let n=e[0],o=t.getTileCoordCenter(e),s=h(i);if(!(0,r.Ym)(s,o)){let e=(0,r.RG)(s),i=Math.ceil((s[0]-o[0])/e);return o[0]+=e*i,t.getTileCoordForCoordAndZ(o,n)}return e}(n,t,i)),(0,m.N5)(t,n)?t:null}clear(){}refresh(){this.clear(),super.refresh()}},S=class t extends R{constructor(e){super({attributions:e.attributions,cacheSize:e.cacheSize,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===t.prototype.tileUrlFunction,this.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(this.tileUrlFunction=e.tileUrlFunction),this.urls=null,e.urls?this.setUrls(e.urls):e.url&&this.setUrl(e.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(t){let e,i=t.target,r=(0,f.v6)(i),n=i.getState();n==c.A.LOADING?(this.tileLoadingKeys_[r]=!0,e="tileloadstart"):r in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[r],e=n==c.A.ERROR?"tileloaderror":n==c.A.LOADED?"tileloadend":void 0),void 0!=e&&this.dispatchEvent(new M(e,i))}setTileLoadFunction(t){this.tileLoadFunction=t,this.changed()}setTileUrlFunction(t,e){this.tileUrlFunction=t,void 0!==e?this.setKey(e):this.changed()}setUrl(t){let e=function(t){let e=[],i=/\{([a-z])-([a-z])\}/.exec(t);if(i){let r,n=i[1].charCodeAt(0),o=i[2].charCodeAt(0);for(r=n;r<=o;++r)e.push(t.replace(i[0],String.fromCharCode(r)));return e}if(i=/\{(\d+)-(\d+)\}/.exec(t)){let r=parseInt(i[2],10);for(let n=parseInt(i[1],10);n<=r;n++)e.push(t.replace(i[0],n.toString()));return e}return e.push(t),e}(t);this.urls=e,this.setUrls(e)}setUrls(t){this.urls=t;let e=t.join("\n");this.generateTileUrlFunction_?this.setTileUrlFunction(function(t,e){var i;let r=t.length,n=Array(r);for(let i=0;i<r;++i)n[i]=function(t,e){return function(i,r,n){var o,s,a;let l;if(!i)return;let h=i[0];if(e){let t=e.getFullTileRange(h);t&&(l=t.getHeight()-1)}return o=i[1],s=i[2],a=l,t.replace(_,h.toString()).replace(w,o.toString()).replace(y,s.toString()).replace(b,function(){if(void 0===a)throw Error("If the URL template has a {-y} placeholder, the grid extent must be known");return(a-s).toString()})}}(t[i],e);return 1===(i=n).length?i[0]:function(t,e,r){if(!t)return;let n=(0,m.tW)(t),o=(0,v.xP)(n,i.length);return i[o](t,e,r)}}(t,this.tileGrid),e):this.setKey(e)}tileUrlFunction(t,e,i){}};function T(t,e){if(g.Wl){let i=t.getCrossOrigin(),r="same-origin",n="same-origin";"anonymous"===i||""===i?(r="cors",n="omit"):"use-credentials"===i&&(r="cors",n="include"),fetch(e,{mode:r,credentials:n,referrerPolicy:t.getReferrerPolicy()}).then(t=>{if(!t.ok)throw Error(`HTTP ${t.status}`);return t.blob()}).then(t=>createImageBitmap(t)).then(e=>{let i=t.getImage();i.width=e.width,i.height=e.height,i.getContext("2d").drawImage(e,0,0),e.close?.(),i.dispatchEvent(new Event("load"))}).catch(()=>{t.getImage().dispatchEvent(new Event("error"))});return}t.getImage().src=e}let I=class extends S{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:T,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:void 0===t.interpolate||t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.crossOrigin=void 0!==t.crossOrigin?t.crossOrigin:null,this.referrerPolicy=t.referrerPolicy,this.tileClass=void 0!==t.tileClass?t.tileClass:d.A,this.tileGridForProjection={},this.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(t){return this.getProjection()&&t&&!(0,n.tI)(this.getProjection(),t)?0:this.getGutter()}getGutter(){return 0}getKey(){let t=super.getKey();return this.getInterpolate()||(t+=":disable-interpolation"),t}getTileGridForProjection(t){let e=this.getProjection();if(this.tileGrid&&(!e||(0,n.tI)(e,t)))return this.tileGrid;let i=(0,f.v6)(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=a(t)),this.tileGridForProjection[i]}createTile_(t,e,i,r,n,o){let s=[t,e,i],a=this.getTileCoordForTileUrlFunction(s,n),l=a?this.tileUrlFunction(a,r,n):void 0,h=new this.tileClass(s,void 0!==l?c.A.IDLE:c.A.EMPTY,void 0!==l?l:"",{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return h.key=o,h.addEventListener(u.A.CHANGE,this.handleTileChange.bind(this)),h}getTile(t,e,i,r,o,s){let a=this.getProjection();if(!a||!o||(0,n.tI)(a,o))return this.getTileInternal(t,e,i,r,a||o);let l=[t,e,i],h=this.getKey(),d=this.getTileGridForProjection(a),c=this.getTileGridForProjection(o),u=this.getTileCoordForTileUrlFunction(l,o),g=new p.A(a,d,o,c,l,u,this.getTilePixelRatio(r),this.getGutter(),(t,e,i,r)=>this.getTileInternal(t,e,i,r,a,s),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return g.key=h,g}getTileInternal(t,e,i,r,n,o){let s=this.getKey(),a=(0,m.et)(this,s,t,e,i);if(o&&o.containsKey(a))return o.get(a);let l=this.createTile_(t,e,i,r,n,s);return o?.set(a,l),l}setRenderReprojectionEdges(t){this.renderReprojectionEdges_!=t&&(this.renderReprojectionEdges_=t,this.changed())}setTileGridForProjection(t,e){let i=(0,n.Jt)(t);if(i){let t=(0,f.v6)(i);t in this.tileGridForProjection||(this.tileGridForProjection[t]=e)}}},P=class extends I{constructor(t){const e=void 0!==(t=t||{}).projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:function(t){let e=t||{},i=e.extent||(0,n.Jt)("EPSG:3857").getExtent(),r={extent:i,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:l(i,e.maxZoom,e.tileSize,e.maxResolution)};return new s.A(r)}({extent:h(e),maxResolution:t.maxResolution,maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});super({attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,interpolate:t.interpolate,projection:e,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.gutter_=void 0!==t.gutter?t.gutter:0}getGutter(){return this.gutter_}}},5549(t,e,i){var r=i(2298);function n(t,e,i,r){return void 0!==r?(r[0]=t,r[1]=e,r[2]=i,r):[t,e,i]}function o(t,e,i,n,o){return`${(0,r.v6)(t)},${e},${i+"/"+n+"/"+o}`}function s(t){var e,i;return e=t[0],i=t[1],(i<<e)+t[2]}function a(t,e){let i=t[0],r=t[1],n=t[2];if(e.getMinZoom()>i||i>e.getMaxZoom())return!1;let o=e.getFullTileRange(i);return!o||o.containsXY(r,n)}i.d(e,{N:()=>n,N5:()=>a,et:()=>o,tW:()=>s})},8549(t,e,i){var r=i(8137),n=i(5609),o=i(4287),s=i(7862),a=i(4615),l=i(76),h=i(7003),d=i(5549);let c=[0,0,0],u=class{constructor(t){let e;if(this.minZoom=void 0!==t.minZoom?t.minZoom:0,this.resolutions_=t.resolutions,(0,o.v)((0,n.WC)(this.resolutions_,(t,e)=>e-t,!0),"`resolutions` must be sorted in descending order"),!t.origins)for(let t=0,i=this.resolutions_.length-1;t<i;++t)if(e){if(this.resolutions_[t]/this.resolutions_[t+1]!==e){e=void 0;break}}else e=this.resolutions_[t]/this.resolutions_[t+1];this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=void 0!==t.origin?t.origin:null,this.origins_=null,void 0!==t.origins&&(this.origins_=t.origins,(0,o.v)(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));const i=t.extent;void 0===i||this.origin_||this.origins_||(this.origin_=(0,s.Py)(i)),(0,o.v)(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,void 0!==t.tileSizes&&(this.tileSizes_=t.tileSizes,(0,o.v)(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=void 0!==t.tileSize?t.tileSize:this.tileSizes_?null:256,(0,o.v)(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=void 0!==i?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],void 0!==t.sizes?this.fullTileRanges_=t.sizes.map((t,e)=>{let n=new r.A(Math.min(0,t[0]),Math.max(t[0]-1,-1),Math.min(0,t[1]),Math.max(t[1]-1,-1));if(i){let t=this.getTileRangeForExtentAndZ(i,e);n.minX=Math.max(t.minX,n.minX),n.maxX=Math.min(t.maxX,n.maxX),n.minY=Math.max(t.minY,n.minY),n.maxY=Math.min(t.maxY,n.maxY)}return n}):i&&this.calculateTileRanges_(i)}forEachTileCoord(t,e,i){let r=this.getTileRangeForExtentAndZ(t,e);for(let t=r.minX,n=r.maxX;t<=n;++t)for(let n=r.minY,o=r.maxY;n<=o;++n)i([e,t,n])}forEachTileCoordParentTileRange(t,e,i,n){let o,s,a,l=null,h=t[0]-1;for(2===this.zoomFactor_?(s=t[1],a=t[2]):l=this.getTileCoordExtent(t,n);h>=this.minZoom;){if(void 0!==s&&void 0!==a?(s=Math.floor(s/2),a=Math.floor(a/2),o=(0,r.N)(s,s,a,a,i)):o=this.getTileRangeForExtentAndZ(l,h,i),e(h,o))return!0;--h}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getOrigins(){return this.origins_}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(2===this.zoomFactor_){let i=2*t[1],n=2*t[2];return(0,r.N)(i,i+1,n,n+1,e)}let n=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(n,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;let n=t[0],o=t[1],s=t[2];if(e===n)return(0,r.N)(o,s,o,s,i);if(this.zoomFactor_){let t=Math.pow(this.zoomFactor_,e-n),a=Math.floor(o*t),l=Math.floor(s*t);if(e<n)return(0,r.N)(a,a,l,l,i);let h=Math.floor(t*(o+1))-1,d=Math.floor(t*(s+1))-1;return(0,r.N)(a,h,l,d,i)}let a=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,c);let n=c[1],o=c[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,c);let s=c[1],a=c[2];return(0,r.N)(n,s,o,a,i)}getTileCoordCenter(t){let e=this.getOrigin(t[0]),i=this.getResolution(t[0]),r=(0,h.xq)(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*r[0]*i,e[1]-(t[2]+.5)*r[1]*i]}getTileCoordExtent(t,e){let i=this.getOrigin(t[0]),r=this.getResolution(t[0]),n=(0,h.xq)(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*n[0]*r,a=i[1]-(t[2]+1)*n[1]*r,l=o+n[0]*r,d=a+n[1]*r;return(0,s.N)(o,a,l,d,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,r,n){let o=this.getZForResolution(i),s=i/this.getResolution(o),a=this.getOrigin(o),c=(0,h.xq)(this.getTileSize(o),this.tmpSize_),u=s*(t-a[0])/i/c[0],g=s*(a[1]-e)/i/c[1];return r?(u=(0,l.mk)(u,5)-1,g=(0,l.mk)(g,5)-1):(u=(0,l.RI)(u,5),g=(0,l.RI)(g,5)),(0,d.N)(o,u,g,n)}getTileCoordForXYAndZ_(t,e,i,r,n){let o=this.getOrigin(i),s=this.getResolution(i),a=(0,h.xq)(this.getTileSize(i),this.tmpSize_),c=(t-o[0])/s/a[0],u=(o[1]-e)/s/a[1];return r?(c=(0,l.mk)(c,5)-1,u=(0,l.mk)(u,5)-1):(c=(0,l.RI)(c,5),u=(0,l.RI)(u,5)),(0,d.N)(i,c,u,n)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){let i=(0,n.FT)(this.resolutions_,t,e||0);return(0,l.qE)(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return(0,a.sj)(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){let e=this.resolutions_.length,i=Array(e);for(let r=this.minZoom;r<e;++r)i[r]=this.getTileRangeForExtentAndZ(t,r);this.fullTileRanges_=i}};i.d(e,{},{A:u})},2416(t,e,i){var r=i(4287);function n(){return[1,0,0,1,0,0]}function o(t,e){let i=e[0],r=e[1];return e[0]=t[0]*i+t[2]*r+t[4],e[1]=t[1]*i+t[3]*r+t[5],e}function s(t,e,i,r,n,o,s,a){let l=Math.sin(o),h=Math.cos(o);return t[0]=r*h,t[1]=n*l,t[2]=-r*l,t[3]=n*h,t[4]=s*r*h-a*r*l+e,t[5]=s*n*l+a*n*h+i,t}function a(t,e){var i;let n=(i=e)[0]*i[3]-i[1]*i[2];(0,r.v)(0!==n,"Transformation matrix cannot be inverted");let o=e[0],s=e[1],a=e[2],l=e[3],h=e[4],d=e[5];return t[0]=l/n,t[1]=-s/n,t[2]=-a/n,t[3]=o/n,t[4]=(a*d-l*h)/n,t[5]=-(o*d-s*h)/n,t}let l=[1e5,1e5,1e5,1e5,2,2];function h(t){return"matrix("+t.join(", ")+")"}function d(t){return t.substring(7,t.length-1).split(",").map(parseFloat)}function c(t,e){let i=d(t),r=d(e);for(let t=0;t<6;++t)if(0!==Math.round((i[t]-r[t])*l[t]))return!1;return!0}i.d(e,{Bb:()=>o,T9:()=>a,Zz:()=>s,dI:()=>h,sH:()=>d,tI:()=>c,vt:()=>n})},2298(t,e,i){function r(){throw Error("Unimplemented abstract method.")}let n=0;function o(t){return t.ol_uid||(t.ol_uid=String(++n))}i.d(e,{b0:()=>r,v6:()=>o})}}]);