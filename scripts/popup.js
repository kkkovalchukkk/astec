const ACTIVE_OVERLAY_CLASSNAME = 'overlay--active';
const ACTIVE_POPUP_CLASSNAME = 'popup--active';
const NO_SCROLL_CLASSNAME = 'no-scroll';

const overlayEl = document.querySelector('.overlay');
const popupEls = document.querySelectorAll('.popup');
const videoPopupEl = document.querySelector('.popup--video');
const toggleVideoPopupBtnEl = document.querySelector('#toggle-video-popup');

const makeActive = (el, classname) => el.classList.add(classname);
const makeInactive = (el, classname) => el.classList.remove(classname);

const offScroll = () => document.body.classList.add(NO_SCROLL_CLASSNAME);
const onScroll = () => document.body.classList.remove(NO_SCROLL_CLASSNAME);

const closeActivePopup = () => {
  const activePopupEl = document.querySelector('.popup--active');
  makeInactive(activePopupEl, ACTIVE_POPUP_CLASSNAME);
  makeInactive(overlayEl, ACTIVE_OVERLAY_CLASSNAME);
  onScroll();
};

const closePopupByClickOnOverlay = (e) => {
  e.target === overlayEl && closeActivePopup();
};

const closePopupByClickOnEsc = (e) => {
  e.key === 'Escape' && closeActivePopup();
};

const toggleOnVideoPopup = () => {
  offScroll();
  makeActive(overlayEl, ACTIVE_OVERLAY_CLASSNAME);
  makeActive(videoPopupEl, ACTIVE_POPUP_CLASSNAME);
};

popupEls.forEach((p) => {
  const closePopupBtnEl = p.querySelector('.popup__close-btn');
  closePopupBtnEl.addEventListener('click', closeActivePopup);
});

toggleVideoPopupBtnEl.addEventListener('click', toggleOnVideoPopup);
