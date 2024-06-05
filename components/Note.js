export default class Note {
  /**
   * Class to hold note data
   *
   * @param {string} title - The title of the note.
   * @param {string} content - The text content of the note.
   */
  constructor(title, content) {
    this.title = title || "";
    this.content = content || "";
  }
}
