let Editor = {
    Сanvas,
    Filters,
    StateHistory
}

let Сanvas = {
    Image,
    Text,
    Primitive,
	Area,
	Size
}

let Image = {
    url: ''
}

let Text = {
    title: 'Text',
    color: '#000000',
    Position,
    fontSize: '12px'
}

let Primitive = {
    Rectangle, 
	Circle, 
	Triangle
}

let Circle = {
    radius: 10,
    Position
}

let Triangle = {
    Point1: Position,
    Point2: Position,
    Point3: Position
}

let Rectangle = {
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


let Area ={
    Position,
    height:10,
    width:20
}

let Size = {
    height:600,
    width:800
}

let StateHistory = {
    PrevState:Editor,
    CurrState:Editor
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

function CreateCanvas(){
    return(Editor)
}

function ChangeSize(Editor, width, height){
    return(Editor)
}

function Filter(Editor, Filters){
    return(Editor)
}

function SeletArea(Editor, Area){
    return(Editor)
}

function MoveArea(Editor){
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

function ChangeTextColor(Editor){
    return(Editor)
}

function InsertPrimitive(Editor, Primitive){
    return(Editor)
}

function ChangePrimitive(Editor){
    return(Editor)
}

function ChangePrimitivePosition(Editor, Position){
    return(Editor)
}

function ChangePrimitiveColor(Editor){
    return(Editor)
}
