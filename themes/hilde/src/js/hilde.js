import "sticky-sidebar";
import "photo-grid";
import { LuminousGallery } from "luminous-lightbox";

if (document.getElementsByClassName('sidebar').length > 0) {
  new StickySidebar('.sidebar', {
    minWidth: 480
  });
}

new LuminousGallery(document.querySelectorAll(".gallery-photo"));
