import { SnappyCompressor } from "./SnappyCompressor";
import { SnappyDecompressor } from "./SnappyDecompressor";

export class LTSnappy {

    public static Compress(data: Uint8Array): Uint8Array {
        let compressor = new SnappyCompressor(data);
        let maxLength = compressor.maxCompressedLength();
        let compressed = new Uint8Array(maxLength);
        let length = compressor.compressToBuffer(compressed);
        if (!compressed.slice) {
            return new Uint8Array(Array.prototype.slice.call(compressed, 0, length))
        }
        return compressed.slice(0, length);
    }

    public static UnCompress(data: Uint8Array): Uint8Array {
        let decompressor = new SnappyDecompressor(data);
        let length = decompressor.readUncompressedLength();
        let uncompressed = new Uint8Array(length);
        if (!decompressor.uncompressToBuffer(uncompressed)) {
            throw new Error('Invalid Snappy bitstream');
        }
        return uncompressed
    }

}