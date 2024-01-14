
export default function Button({direction, updatePhoto}) {
   return(
    <button onClick={updatePhoto}><img src={"/" + direction + ".svg"} alt="" width="25px" height="25px"></img></button>
   );
}