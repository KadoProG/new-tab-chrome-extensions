/**
 * ローカルIPアドレスを取得する
 */
export const getLocalIpAddress = new Promise<string>((resolve, reject) => {
  const peerConnection = new RTCPeerConnection();
  peerConnection.createDataChannel('');
  peerConnection
    .createOffer()
    .then((offer) => peerConnection.setLocalDescription(offer))
    .catch((error) => reject(error));

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      const candidate = event.candidate.candidate;
      const result = candidate.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/);
      if (result) {
        peerConnection.close();
        resolve(result[0]);
      }
    }
  };
});
