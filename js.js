
function montrer(AnId)
{
    var elem = document.getElementById(AnId);
    if (elem.style.visibility=="hidden")
    {
        // Contenu caché, le montrer
        elem.style.visibility = "visible";
    }
    else
    {
        // Contenu visible, le garder visible
        elem.style.visibility = "visible";
    }
    
  
}

