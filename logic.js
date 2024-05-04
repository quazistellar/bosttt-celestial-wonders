 const planets = ["images/moon.png", "images/juptr.png", "images/venus.png", "images/saturn.png", "images/earth.png", "images/ur.png", "images/neptune.png", "images/mars.png", "images/mercury.png", ];
    const stars = ["images/star1.png", "images/star2.png", "images/star3.png", "images/star4.png" ];

    const objectNameInput = document.getElementById("object-name");
    const objectTypeSelect = document.getElementById("object-type");
    const addButton = document.getElementById("add-button");
    const changeButton = document.getElementById("change-button");
    const removeButton = document.getElementById("remove-button");
    const objectsContainer = document.getElementById("objects-container");

    const objects = [];

    const getRandomPosition = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const randomX = Math.random() * (windowWidth - 100);
      const randomY = Math.random() * (windowHeight - 100);
      return { x: randomX, y: randomY };
    };

    const addObject = (objectName, objectType) => {
      let pikcha;
      if (objectType === "planet") {
        pikcha = planets[Math.floor(Math.random() * planets.length)];
      } else if (objectType === "star") {
        pikcha = stars[Math.floor(Math.random() * stars.length)];
      }

      const pikchaElement = document.createElement("img");
      pikchaElement.src = pikcha;
      pikchaElement.alt = objectName;

      const objectCaptionElement = document.createElement("p");
      objectCaptionElement.textContent = objectName;

      const objectElement = document.createElement("div");
      objectElement.classList.add("object");
      objectElement.appendChild(pikchaElement);
      objectElement.appendChild(objectCaptionElement);

      const randomPosition = getRandomPosition();
      objectElement.style.left = randomPosition.x + "px";
      objectElement.style.top = randomPosition.y + "px";
      const randomSize = Math.random() * (100 - 50) + 50;
      pikchaElement.style.width = randomSize + "px";
      pikchaElement.style.height = randomSize + "px";
      const randomRotation = Math.random() * 360;
      pikchaElement.style.transform = "rotate(" + randomRotation + "deg)";
      objectsContainer.appendChild(objectElement);
      objects.push(objectElement);
    };

    const changeObject = (objectElement, objectName, objectType) => {
      let newPikcha;
      if (objectType === "planet") {
        newPikcha = planets[Math.floor(Math.random() * planets.length)];
      } else if (objectType === "star") {
        newPikcha = stars[Math.floor(Math.random() * stars.length)];
      }

      const pikchaElement = objectElement.querySelector("img");
      pikchaElement.src = newPikcha;

      const objectCaptionElement = objectElement.querySelector("p");
      objectCaptionElement.textContent = objectName;
    };

    const removeObject = (objectElement) => {
      objectElement.remove();
      objects.pop();
    };

    addButton.addEventListener("click", () => {
      const objectName = objectNameInput.value;
      const objectType = objectTypeSelect.value;

      if (objectName.trim() === "") {
        alert("нельзя оставлять безымянный объект в небе");
        return;
      }

      addObject(objectName, objectType);
    });

    changeButton.addEventListener("click", () => {
      if (objects.length === 0) {
        alert("в небе ещё ничего нет..");
        return;
      }

      const randomObjectIndex = Math.floor(Math.random() * objects.length);
      const objectElement = objects[randomObjectIndex];

      const newObjectName = objectNameInput.value;
      const newObjectType = objectTypeSelect.value;

      if (newObjectName.trim() === "") {
        alert("нельзя оставлять безымянный объект в небе");
        return;
      }

      changeObject(objectElement, newObjectName, newObjectType);
    });

    removeButton.addEventListener("click", () => {
      if (objects.length === 0) {
        alert("в небе ещё ничего нет..");
        return;
      }

      const lastObjectElement = objectsContainer.lastChild;
      removeObject(lastObjectElement);
    });
