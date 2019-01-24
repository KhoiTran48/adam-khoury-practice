function _(id) {
    return document.getElementById(id);
}
var droppedIn= false;
function drag_start(event){
    _('status').innerHTML = "Dragging the "+ event.target.getAttribute('id');
    event.dataTransfer.dropEffect='move';
    event.dataTransfer.setData("text", event.target.getAttribute('id'));
}

function drag_enter(event){
    _('status').innerHTML="You are dragging over the "+ event.target.getAttribute('id');
}
function drag_leave(event){
    _('status').innerHTML="You left the "+ event.target.getAttribute('id');
}
function drag_drop(event){
    event.preventDefault();
    var ele_id= event.dataTransfer.getData("text");
    if(ele_id){
        event.target.appendChild(_(ele_id));
        _('status').innerHTML="Dropped "+ ele_id+ " into the "+ event.target.getAttribute("id");
        _(ele_id).removeAttribute("draggable");
        _(ele_id).style.cursor="default";
        droppedIn=true;
    }else{ // upload file
        for(let i=0; i< event.dataTransfer.files.length; i++){
            console.log('File name: ' + event.dataTransfer.files[i].name);
            console.log('Size : ' + event.dataTransfer.files[i].size);
        }
    }
    

}
function drag_end(event){
    if(droppedIn===false){
        _('status').innerHTML="you let the " + event.target.getAttribute("id") + "go";
    }
    droppedIn=false;
}
function readDropZone(){
    for(let i=0; i< _('drop_zone').children.length; i++){
        console.log(_('drop_zone').children[i].id +' is in drop zone');
    }
}