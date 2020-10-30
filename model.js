let Editor = {
    Сanvas,
    Filters,
    SelectedArea,
    SelectedText,
    SelectedPrimitive,
    StateHistory
}

let Сanvas = {
    Images,
    Texts,
    Primitives,
	Size
}

let Images = {
    url: ''
}

let Texts = {
    title: 'Text',
    color: '#000000',
    Position,
    fontSize: '12px'
}

let Primitives = {
    Rectangles, 
	Circles, 
	Triangles
}

let Circles = {
    radius: 10,
    Position
}

let Triangles = {
    Point1: Position,
    Point2: Position,
    Point3: Position
}

let Rectangles = {
    height:20,
    width:20,
    Position
}

let Position = {
    x:100,
    y:100
}

let Filters = {
    gray: {color: '#808080'},
	red: {color: '#FF0000'},
    blue: {color: '#0000FF'},
    green: {color: '#008000'}
}


let SelectedArea ={
    Position,
    height:10,
    width:20
}

let SelectedText{
    Texts
}

let SelectedPrimitive{
    Primitives
}

let Size = {
    height:600,
    width:800
}

let StateHistory = {
    UndoStack:[],
    RedoStack:[]
}

function Import(Editor, Image){
    return(Editor)
}

function Export(Editor){
    return(Image)
}

function Undo(Editor){
    return(Editor)
}

function Redo(Editor){
    return(Editor)
}

function CreateCanvas(Editor){
    return(Editor)
}

function ChangeSize(Editor, width, height){
    return(Editor)
}

function Filter(Editor, Filters){
    return(Editor)
}

function SelectArea(Editor, Area){
    return(Editor)
}

function MoveArea(Editor, Position){
    return(Editor)
}

function Cut(Editor){
    return(Editor)
}

function DeleteArea(Editor){
    return(Editor)
}

function InsertText(Editor, Text){
    return (Editor)
}

function ChangeText(Editor){
    return(Editor)
}

function ChangeTextPosition(Editor, Position){
    return(Editor)
}

function ChangeTextColor(Editor, colour){
    return(Editor)
}

function InsertPrimitive(Editor, Primitive){
    return(Editor)
}

function ChangePrimitivePosition(Editor, Position){
    return(Editor)
}

function ChangePrimitiveColor(Editor, colour){
    return(Editor)
}
