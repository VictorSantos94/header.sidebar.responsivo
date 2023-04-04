var header = document.getElementById ('header');
var navigation_bar = document.getElementById('navigation_bar');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar();
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        header.style.marginLeft = '-10vw'
  }
    else
    {
        header.style.marginLeft = '-100vw'

    }
}