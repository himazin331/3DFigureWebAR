import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://aframe.io/releases/1.7.0/aframe.min.js"></Script>
      <Script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></Script>

      <a-scene embedded arjs="patternRatio: 0.5" vr-mode-ui="enabled: false;" renderer="logarithmicDepthBuffer: true;">
        <a-assets>
          <a-asset-item id="cgfigure" src="assets/wolf.glb"></a-asset-item>
        </a-assets>

        <a-marker type="pattern" url="assets/ar_pattern2.patt">
          <a-entity position="0 0 0.5" rotation="-90 0 0">
            <a-entity scale="0.2 0.2 0.2" gltf-model="#cgfigure"
              animation="property: rotation; to: 0 360 0; loop: true; dur: 5000">
            </a-entity>
          </a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}
