export function greeting() {
    const date = new Date();
    const currentTime = date.getHours();

    if (currentTime >= 0 && currentTime <= 12) {
        return  "Good Morning";
    } else if (currentTime > 12 && currentTime <= 17) {
        return  "Good Afternoon";
    } else {
        return  "Good Night";
    }

}
