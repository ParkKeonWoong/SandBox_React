export const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function" || typeof rejection !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
