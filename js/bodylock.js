$(function () {
  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  }

  if (lockPadding > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.lockPaddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("no-scroll");

  unlock = false;

  setTimeout(
    () => {
      unlock = true;
    },

    200
  );

  function bodyUnLock() {
    setTimeout(
      function () {
        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
          }
        }

        body.style.paddingRight = "0px";
        body.classList.remove("no-scroll");
      },

      timeout
    );

    unlock = false;

    setTimeout(
      () => {
        unlock = true;
      },

      200
    );
  }
});
