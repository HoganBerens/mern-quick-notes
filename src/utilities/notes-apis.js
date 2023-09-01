import sendRequest from "../utilities/send-request";
const NOTES_BASE_URL = "/api/notes";

export function getAll() {
  return sendRequest(NOTES_BASE_URL);
}

export function add(noteData) {
  return sendRequest(NOTES_BASE_URL, "POST", noteData);
}
