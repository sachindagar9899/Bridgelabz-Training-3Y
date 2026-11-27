$(function(){
const api="http://localhost:3001/products"; let timer;
function render(data){const box=$("#results").empty();if(!data.length){box.text("No products found");return;}
data.forEach(p=>{const card=$("<article class='card'>");$("<img>").attr({src:p.image,alt:p.name}).appendTo(card);$("<h2>").text(p.name).appendTo(card);$("<p>").text("$"+Number(p.price).toFixed(2)).appendTo(card);box.append(card);});}
function search(q){$("#loading").prop("hidden",false);$.ajax({url:api,method:"GET",data:{q:q}}).done(render).fail(()=>$("#results").text("Could not load products.")).always(()=>$("#loading").prop("hidden",true));}
$("#searchInput").on("input",function(){clearTimeout(timer);const q=$(this).val().trim();timer=setTimeout(()=>search(q),200);});search("");
});
