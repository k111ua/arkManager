import md5 from 'js-md5'
import { ref } from 'vue'

export default function (data) {
  return ref(md5(data))
}
