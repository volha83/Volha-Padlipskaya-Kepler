function abbrevName(name) {
    const words = name.split(" ");
    console.log(words);
    let initials = "";
  
    for (const word of words) {
      if (word.length > 0) {
        initials = initials + "." + word[0].toUpperCase();
      }
    }
    return initials;
  }
  console.log(abbrevName("Sam Harris"));