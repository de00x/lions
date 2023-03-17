{
  /* <body> */
}

// <ul>
//   <li>Кликните на div ниже, чтобы отредактировать текст.</li>
//   <li>Нажатие на Enter или потеря фокуса с ввода сохранят содержимое.</li>
// </ul>

// HTML-код разрешён.

// <div id="view" class="view">Текст</div>

{
  /* <script> */
}
let area = null;
let view = document.getElementById("view");

view.onclick = function () {
  editStart();
};

const editStart = () => {
  area = document.createElement("textarea");
  area.className = "edit";
  area.value = view.innerHTML;

  area.onkeydown = (event) => {
    if (event.key == "Enter") {
      this.blur();
    }
  };

  area.onblur = function () {
    editEnd();
  };

  view.replaceWith(area);
  area.focus();
};

const editEnd = () => {
  view.innerHTML = area.value;
  area.replaceWith(view);
};
{
  /* </script> */
}

{
  /* </body> */
}
