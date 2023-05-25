export const isMobile = checkIsMobile();

function checkIsMobile(): boolean {
  return window.innerWidth <= 1000;
}
