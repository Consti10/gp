import Vector from './vector'

export default function colormap(x, min, max) {
  x = Math.max(Math.min(x, max), min)
	x = (x - min) / (max - min)

	let i = Math.max(0, Math.min(1, round001(x)))
	while(colors[i] == undefined && i < 1) {
		i += 0.001
		i = round001(i)
	}
	if (colors[i] == undefined) {
		return new Vector()
	}
	return colors[i]
}

function round001(x) {
	return Math.round((x + Number.EPSILON) * 1000) / 1000
}

// color from matplotlib seismic
// https://github.com/matplotlib/matplotlib/blob/master/lib/matplotlib/_cm.py
const colors = {
0.000: new Vector(0.000, 0.000, 0.300),
0.002: new Vector(0.000, 0.000, 0.300),
0.004: new Vector(0.000, 0.000, 0.311),
0.006: new Vector(0.000, 0.000, 0.311),
0.008: new Vector(0.000, 0.000, 0.322),
0.010: new Vector(0.000, 0.000, 0.322),
0.012: new Vector(0.000, 0.000, 0.333),
0.014: new Vector(0.000, 0.000, 0.333),
0.016: new Vector(0.000, 0.000, 0.344),
0.018: new Vector(0.000, 0.000, 0.344),
0.020: new Vector(0.000, 0.000, 0.355),
0.022: new Vector(0.000, 0.000, 0.355),
0.023: new Vector(0.000, 0.000, 0.366),
0.025: new Vector(0.000, 0.000, 0.366),
0.027: new Vector(0.000, 0.000, 0.377),
0.029: new Vector(0.000, 0.000, 0.377),
0.031: new Vector(0.000, 0.000, 0.388),
0.033: new Vector(0.000, 0.000, 0.388),
0.035: new Vector(0.000, 0.000, 0.399),
0.037: new Vector(0.000, 0.000, 0.399),
0.039: new Vector(0.000, 0.000, 0.410),
0.041: new Vector(0.000, 0.000, 0.410),
0.043: new Vector(0.000, 0.000, 0.421),
0.045: new Vector(0.000, 0.000, 0.421),
0.047: new Vector(0.000, 0.000, 0.432),
0.049: new Vector(0.000, 0.000, 0.432),
0.051: new Vector(0.000, 0.000, 0.443),
0.053: new Vector(0.000, 0.000, 0.443),
0.055: new Vector(0.000, 0.000, 0.454),
0.057: new Vector(0.000, 0.000, 0.454),
0.059: new Vector(0.000, 0.000, 0.465),
0.061: new Vector(0.000, 0.000, 0.465),
0.063: new Vector(0.000, 0.000, 0.476),
0.065: new Vector(0.000, 0.000, 0.476),
0.067: new Vector(0.000, 0.000, 0.487),
0.068: new Vector(0.000, 0.000, 0.487),
0.070: new Vector(0.000, 0.000, 0.498),
0.072: new Vector(0.000, 0.000, 0.498),
0.074: new Vector(0.000, 0.000, 0.509),
0.076: new Vector(0.000, 0.000, 0.509),
0.078: new Vector(0.000, 0.000, 0.520),
0.080: new Vector(0.000, 0.000, 0.520),
0.082: new Vector(0.000, 0.000, 0.531),
0.084: new Vector(0.000, 0.000, 0.531),
0.086: new Vector(0.000, 0.000, 0.542),
0.088: new Vector(0.000, 0.000, 0.542),
0.090: new Vector(0.000, 0.000, 0.553),
0.092: new Vector(0.000, 0.000, 0.553),
0.094: new Vector(0.000, 0.000, 0.564),
0.096: new Vector(0.000, 0.000, 0.564),
0.098: new Vector(0.000, 0.000, 0.575),
0.100: new Vector(0.000, 0.000, 0.575),
0.102: new Vector(0.000, 0.000, 0.585),
0.104: new Vector(0.000, 0.000, 0.585),
0.106: new Vector(0.000, 0.000, 0.596),
0.108: new Vector(0.000, 0.000, 0.596),
0.110: new Vector(0.000, 0.000, 0.607),
0.112: new Vector(0.000, 0.000, 0.607),
0.114: new Vector(0.000, 0.000, 0.618),
0.115: new Vector(0.000, 0.000, 0.618),
0.117: new Vector(0.000, 0.000, 0.629),
0.119: new Vector(0.000, 0.000, 0.629),
0.121: new Vector(0.000, 0.000, 0.640),
0.123: new Vector(0.000, 0.000, 0.640),
0.125: new Vector(0.000, 0.000, 0.651),
0.127: new Vector(0.000, 0.000, 0.651),
0.129: new Vector(0.000, 0.000, 0.662),
0.131: new Vector(0.000, 0.000, 0.662),
0.133: new Vector(0.000, 0.000, 0.673),
0.135: new Vector(0.000, 0.000, 0.673),
0.137: new Vector(0.000, 0.000, 0.684),
0.139: new Vector(0.000, 0.000, 0.684),
0.141: new Vector(0.000, 0.000, 0.695),
0.143: new Vector(0.000, 0.000, 0.695),
0.145: new Vector(0.000, 0.000, 0.706),
0.147: new Vector(0.000, 0.000, 0.706),
0.149: new Vector(0.000, 0.000, 0.717),
0.151: new Vector(0.000, 0.000, 0.717),
0.153: new Vector(0.000, 0.000, 0.728),
0.155: new Vector(0.000, 0.000, 0.728),
0.157: new Vector(0.000, 0.000, 0.739),
0.159: new Vector(0.000, 0.000, 0.739),
0.160: new Vector(0.000, 0.000, 0.750),
0.162: new Vector(0.000, 0.000, 0.750),
0.164: new Vector(0.000, 0.000, 0.761),
0.166: new Vector(0.000, 0.000, 0.761),
0.168: new Vector(0.000, 0.000, 0.772),
0.170: new Vector(0.000, 0.000, 0.772),
0.172: new Vector(0.000, 0.000, 0.783),
0.174: new Vector(0.000, 0.000, 0.783),
0.176: new Vector(0.000, 0.000, 0.794),
0.178: new Vector(0.000, 0.000, 0.794),
0.180: new Vector(0.000, 0.000, 0.805),
0.182: new Vector(0.000, 0.000, 0.805),
0.184: new Vector(0.000, 0.000, 0.816),
0.186: new Vector(0.000, 0.000, 0.816),
0.188: new Vector(0.000, 0.000, 0.827),
0.190: new Vector(0.000, 0.000, 0.827),
0.192: new Vector(0.000, 0.000, 0.838),
0.194: new Vector(0.000, 0.000, 0.838),
0.196: new Vector(0.000, 0.000, 0.849),
0.198: new Vector(0.000, 0.000, 0.849),
0.200: new Vector(0.000, 0.000, 0.860),
0.202: new Vector(0.000, 0.000, 0.860),
0.204: new Vector(0.000, 0.000, 0.871),
0.205: new Vector(0.000, 0.000, 0.871),
0.207: new Vector(0.000, 0.000, 0.882),
0.209: new Vector(0.000, 0.000, 0.882),
0.211: new Vector(0.000, 0.000, 0.893),
0.213: new Vector(0.000, 0.000, 0.893),
0.215: new Vector(0.000, 0.000, 0.904),
0.217: new Vector(0.000, 0.000, 0.904),
0.219: new Vector(0.000, 0.000, 0.915),
0.221: new Vector(0.000, 0.000, 0.915),
0.223: new Vector(0.000, 0.000, 0.926),
0.225: new Vector(0.000, 0.000, 0.926),
0.227: new Vector(0.000, 0.000, 0.937),
0.229: new Vector(0.000, 0.000, 0.937),
0.231: new Vector(0.000, 0.000, 0.948),
0.233: new Vector(0.000, 0.000, 0.948),
0.235: new Vector(0.000, 0.000, 0.959),
0.237: new Vector(0.000, 0.000, 0.959),
0.239: new Vector(0.000, 0.000, 0.970),
0.241: new Vector(0.000, 0.000, 0.970),
0.243: new Vector(0.000, 0.000, 0.981),
0.245: new Vector(0.000, 0.000, 0.981),
0.247: new Vector(0.000, 0.000, 0.992),
0.249: new Vector(0.000, 0.000, 0.992),
0.250: new Vector(0.004, 0.004, 1.000),
0.252: new Vector(0.004, 0.004, 1.000),
0.254: new Vector(0.020, 0.020, 1.000),
0.256: new Vector(0.020, 0.020, 1.000),
0.258: new Vector(0.035, 0.035, 1.000),
0.260: new Vector(0.035, 0.035, 1.000),
0.262: new Vector(0.051, 0.051, 1.000),
0.264: new Vector(0.051, 0.051, 1.000),
0.266: new Vector(0.067, 0.067, 1.000),
0.268: new Vector(0.067, 0.067, 1.000),
0.270: new Vector(0.082, 0.082, 1.000),
0.272: new Vector(0.082, 0.082, 1.000),
0.274: new Vector(0.098, 0.098, 1.000),
0.276: new Vector(0.098, 0.098, 1.000),
0.278: new Vector(0.114, 0.114, 1.000),
0.280: new Vector(0.114, 0.114, 1.000),
0.282: new Vector(0.129, 0.129, 1.000),
0.284: new Vector(0.129, 0.129, 1.000),
0.286: new Vector(0.145, 0.145, 1.000),
0.288: new Vector(0.145, 0.145, 1.000),
0.290: new Vector(0.161, 0.161, 1.000),
0.292: new Vector(0.161, 0.161, 1.000),
0.294: new Vector(0.176, 0.176, 1.000),
0.295: new Vector(0.176, 0.176, 1.000),
0.297: new Vector(0.192, 0.192, 1.000),
0.299: new Vector(0.192, 0.192, 1.000),
0.301: new Vector(0.208, 0.208, 1.000),
0.303: new Vector(0.208, 0.208, 1.000),
0.305: new Vector(0.224, 0.224, 1.000),
0.307: new Vector(0.224, 0.224, 1.000),
0.309: new Vector(0.239, 0.239, 1.000),
0.311: new Vector(0.239, 0.239, 1.000),
0.313: new Vector(0.255, 0.255, 1.000),
0.315: new Vector(0.255, 0.255, 1.000),
0.317: new Vector(0.271, 0.271, 1.000),
0.319: new Vector(0.271, 0.271, 1.000),
0.321: new Vector(0.286, 0.286, 1.000),
0.323: new Vector(0.286, 0.286, 1.000),
0.325: new Vector(0.302, 0.302, 1.000),
0.327: new Vector(0.302, 0.302, 1.000),
0.329: new Vector(0.318, 0.318, 1.000),
0.331: new Vector(0.318, 0.318, 1.000),
0.333: new Vector(0.333, 0.333, 1.000),
0.335: new Vector(0.333, 0.333, 1.000),
0.337: new Vector(0.349, 0.349, 1.000),
0.339: new Vector(0.349, 0.349, 1.000),
0.341: new Vector(0.365, 0.365, 1.000),
0.342: new Vector(0.365, 0.365, 1.000),
0.344: new Vector(0.380, 0.380, 1.000),
0.346: new Vector(0.380, 0.380, 1.000),
0.348: new Vector(0.396, 0.396, 1.000),
0.350: new Vector(0.396, 0.396, 1.000),
0.352: new Vector(0.412, 0.412, 1.000),
0.354: new Vector(0.412, 0.412, 1.000),
0.356: new Vector(0.427, 0.427, 1.000),
0.358: new Vector(0.427, 0.427, 1.000),
0.360: new Vector(0.443, 0.443, 1.000),
0.362: new Vector(0.443, 0.443, 1.000),
0.364: new Vector(0.459, 0.459, 1.000),
0.366: new Vector(0.459, 0.459, 1.000),
0.368: new Vector(0.475, 0.475, 1.000),
0.370: new Vector(0.475, 0.475, 1.000),
0.372: new Vector(0.490, 0.490, 1.000),
0.374: new Vector(0.490, 0.490, 1.000),
0.376: new Vector(0.506, 0.506, 1.000),
0.378: new Vector(0.506, 0.506, 1.000),
0.380: new Vector(0.522, 0.522, 1.000),
0.382: new Vector(0.522, 0.522, 1.000),
0.384: new Vector(0.537, 0.537, 1.000),
0.386: new Vector(0.537, 0.537, 1.000),
0.387: new Vector(0.553, 0.553, 1.000),
0.389: new Vector(0.553, 0.553, 1.000),
0.391: new Vector(0.569, 0.569, 1.000),
0.393: new Vector(0.569, 0.569, 1.000),
0.395: new Vector(0.584, 0.584, 1.000),
0.397: new Vector(0.584, 0.584, 1.000),
0.399: new Vector(0.600, 0.600, 1.000),
0.401: new Vector(0.600, 0.600, 1.000),
0.403: new Vector(0.616, 0.616, 1.000),
0.405: new Vector(0.616, 0.616, 1.000),
0.407: new Vector(0.631, 0.631, 1.000),
0.409: new Vector(0.631, 0.631, 1.000),
0.411: new Vector(0.647, 0.647, 1.000),
0.413: new Vector(0.647, 0.647, 1.000),
0.415: new Vector(0.663, 0.663, 1.000),
0.417: new Vector(0.663, 0.663, 1.000),
0.419: new Vector(0.678, 0.678, 1.000),
0.421: new Vector(0.678, 0.678, 1.000),
0.423: new Vector(0.694, 0.694, 1.000),
0.425: new Vector(0.694, 0.694, 1.000),
0.427: new Vector(0.710, 0.710, 1.000),
0.429: new Vector(0.710, 0.710, 1.000),
0.431: new Vector(0.725, 0.725, 1.000),
0.432: new Vector(0.725, 0.725, 1.000),
0.434: new Vector(0.741, 0.741, 1.000),
0.436: new Vector(0.741, 0.741, 1.000),
0.438: new Vector(0.757, 0.757, 1.000),
0.440: new Vector(0.757, 0.757, 1.000),
0.442: new Vector(0.773, 0.773, 1.000),
0.444: new Vector(0.773, 0.773, 1.000),
0.446: new Vector(0.788, 0.788, 1.000),
0.448: new Vector(0.788, 0.788, 1.000),
0.450: new Vector(0.804, 0.804, 1.000),
0.452: new Vector(0.804, 0.804, 1.000),
0.454: new Vector(0.820, 0.820, 1.000),
0.456: new Vector(0.820, 0.820, 1.000),
0.458: new Vector(0.835, 0.835, 1.000),
0.460: new Vector(0.835, 0.835, 1.000),
0.462: new Vector(0.851, 0.851, 1.000),
0.464: new Vector(0.851, 0.851, 1.000),
0.466: new Vector(0.867, 0.867, 1.000),
0.468: new Vector(0.867, 0.867, 1.000),
0.470: new Vector(0.882, 0.882, 1.000),
0.472: new Vector(0.882, 0.882, 1.000),
0.474: new Vector(0.898, 0.898, 1.000),
0.476: new Vector(0.898, 0.898, 1.000),
0.477: new Vector(0.914, 0.914, 1.000),
0.479: new Vector(0.914, 0.914, 1.000),
0.481: new Vector(0.929, 0.929, 1.000),
0.483: new Vector(0.929, 0.929, 1.000),
0.485: new Vector(0.945, 0.945, 1.000),
0.487: new Vector(0.945, 0.945, 1.000),
0.489: new Vector(0.961, 0.961, 1.000),
0.491: new Vector(0.961, 0.961, 1.000),
0.493: new Vector(0.976, 0.976, 1.000),
0.495: new Vector(0.976, 0.976, 1.000),
0.497: new Vector(0.992, 0.992, 1.000),
0.499: new Vector(0.992, 0.992, 1.000),
0.501: new Vector(1.000, 0.992, 0.992),
0.503: new Vector(1.000, 0.992, 0.992),
0.505: new Vector(1.000, 0.976, 0.976),
0.507: new Vector(1.000, 0.976, 0.976),
0.509: new Vector(1.000, 0.961, 0.961),
0.511: new Vector(1.000, 0.961, 0.961),
0.513: new Vector(1.000, 0.945, 0.945),
0.515: new Vector(1.000, 0.945, 0.945),
0.517: new Vector(1.000, 0.929, 0.929),
0.519: new Vector(1.000, 0.929, 0.929),
0.521: new Vector(1.000, 0.914, 0.914),
0.523: new Vector(1.000, 0.914, 0.914),
0.524: new Vector(1.000, 0.898, 0.898),
0.526: new Vector(1.000, 0.898, 0.898),
0.528: new Vector(1.000, 0.882, 0.882),
0.530: new Vector(1.000, 0.882, 0.882),
0.532: new Vector(1.000, 0.867, 0.867),
0.534: new Vector(1.000, 0.867, 0.867),
0.536: new Vector(1.000, 0.851, 0.851),
0.538: new Vector(1.000, 0.851, 0.851),
0.540: new Vector(1.000, 0.835, 0.835),
0.542: new Vector(1.000, 0.835, 0.835),
0.544: new Vector(1.000, 0.820, 0.820),
0.546: new Vector(1.000, 0.820, 0.820),
0.548: new Vector(1.000, 0.804, 0.804),
0.550: new Vector(1.000, 0.804, 0.804),
0.552: new Vector(1.000, 0.788, 0.788),
0.554: new Vector(1.000, 0.788, 0.788),
0.556: new Vector(1.000, 0.773, 0.773),
0.558: new Vector(1.000, 0.773, 0.773),
0.560: new Vector(1.000, 0.757, 0.757),
0.562: new Vector(1.000, 0.757, 0.757),
0.564: new Vector(1.000, 0.741, 0.741),
0.566: new Vector(1.000, 0.741, 0.741),
0.568: new Vector(1.000, 0.725, 0.725),
0.569: new Vector(1.000, 0.725, 0.725),
0.571: new Vector(1.000, 0.710, 0.710),
0.573: new Vector(1.000, 0.710, 0.710),
0.575: new Vector(1.000, 0.694, 0.694),
0.577: new Vector(1.000, 0.694, 0.694),
0.579: new Vector(1.000, 0.678, 0.678),
0.581: new Vector(1.000, 0.678, 0.678),
0.583: new Vector(1.000, 0.663, 0.663),
0.585: new Vector(1.000, 0.663, 0.663),
0.587: new Vector(1.000, 0.647, 0.647),
0.589: new Vector(1.000, 0.647, 0.647),
0.591: new Vector(1.000, 0.631, 0.631),
0.593: new Vector(1.000, 0.631, 0.631),
0.595: new Vector(1.000, 0.616, 0.616),
0.597: new Vector(1.000, 0.616, 0.616),
0.599: new Vector(1.000, 0.600, 0.600),
0.601: new Vector(1.000, 0.600, 0.600),
0.603: new Vector(1.000, 0.584, 0.584),
0.605: new Vector(1.000, 0.584, 0.584),
0.607: new Vector(1.000, 0.569, 0.569),
0.609: new Vector(1.000, 0.569, 0.569),
0.611: new Vector(1.000, 0.553, 0.553),
0.613: new Vector(1.000, 0.553, 0.553),
0.614: new Vector(1.000, 0.537, 0.537),
0.616: new Vector(1.000, 0.537, 0.537),
0.618: new Vector(1.000, 0.522, 0.522),
0.620: new Vector(1.000, 0.522, 0.522),
0.622: new Vector(1.000, 0.506, 0.506),
0.624: new Vector(1.000, 0.506, 0.506),
0.626: new Vector(1.000, 0.490, 0.490),
0.628: new Vector(1.000, 0.490, 0.490),
0.630: new Vector(1.000, 0.475, 0.475),
0.632: new Vector(1.000, 0.475, 0.475),
0.634: new Vector(1.000, 0.459, 0.459),
0.636: new Vector(1.000, 0.459, 0.459),
0.638: new Vector(1.000, 0.443, 0.443),
0.640: new Vector(1.000, 0.443, 0.443),
0.642: new Vector(1.000, 0.427, 0.427),
0.644: new Vector(1.000, 0.427, 0.427),
0.646: new Vector(1.000, 0.412, 0.412),
0.648: new Vector(1.000, 0.412, 0.412),
0.650: new Vector(1.000, 0.396, 0.396),
0.652: new Vector(1.000, 0.396, 0.396),
0.654: new Vector(1.000, 0.380, 0.380),
0.656: new Vector(1.000, 0.380, 0.380),
0.658: new Vector(1.000, 0.365, 0.365),
0.659: new Vector(1.000, 0.365, 0.365),
0.661: new Vector(1.000, 0.349, 0.349),
0.663: new Vector(1.000, 0.349, 0.349),
0.665: new Vector(1.000, 0.333, 0.333),
0.667: new Vector(1.000, 0.333, 0.333),
0.669: new Vector(1.000, 0.318, 0.318),
0.671: new Vector(1.000, 0.318, 0.318),
0.673: new Vector(1.000, 0.302, 0.302),
0.675: new Vector(1.000, 0.302, 0.302),
0.677: new Vector(1.000, 0.286, 0.286),
0.679: new Vector(1.000, 0.286, 0.286),
0.681: new Vector(1.000, 0.271, 0.271),
0.683: new Vector(1.000, 0.271, 0.271),
0.685: new Vector(1.000, 0.255, 0.255),
0.687: new Vector(1.000, 0.255, 0.255),
0.689: new Vector(1.000, 0.239, 0.239),
0.691: new Vector(1.000, 0.239, 0.239),
0.693: new Vector(1.000, 0.224, 0.224),
0.695: new Vector(1.000, 0.224, 0.224),
0.697: new Vector(1.000, 0.208, 0.208),
0.699: new Vector(1.000, 0.208, 0.208),
0.701: new Vector(1.000, 0.192, 0.192),
0.703: new Vector(1.000, 0.192, 0.192),
0.705: new Vector(1.000, 0.176, 0.176),
0.706: new Vector(1.000, 0.176, 0.176),
0.708: new Vector(1.000, 0.161, 0.161),
0.710: new Vector(1.000, 0.161, 0.161),
0.712: new Vector(1.000, 0.145, 0.145),
0.714: new Vector(1.000, 0.145, 0.145),
0.716: new Vector(1.000, 0.129, 0.129),
0.718: new Vector(1.000, 0.129, 0.129),
0.720: new Vector(1.000, 0.114, 0.114),
0.722: new Vector(1.000, 0.114, 0.114),
0.724: new Vector(1.000, 0.098, 0.098),
0.726: new Vector(1.000, 0.098, 0.098),
0.728: new Vector(1.000, 0.082, 0.082),
0.730: new Vector(1.000, 0.082, 0.082),
0.732: new Vector(1.000, 0.067, 0.067),
0.734: new Vector(1.000, 0.067, 0.067),
0.736: new Vector(1.000, 0.051, 0.051),
0.738: new Vector(1.000, 0.051, 0.051),
0.740: new Vector(1.000, 0.035, 0.035),
0.742: new Vector(1.000, 0.035, 0.035),
0.744: new Vector(1.000, 0.020, 0.020),
0.746: new Vector(1.000, 0.020, 0.020),
0.748: new Vector(1.000, 0.004, 0.004),
0.750: new Vector(1.000, 0.004, 0.004),
0.751: new Vector(0.994, 0.000, 0.000),
0.753: new Vector(0.994, 0.000, 0.000),
0.755: new Vector(0.986, 0.000, 0.000),
0.757: new Vector(0.986, 0.000, 0.000),
0.759: new Vector(0.978, 0.000, 0.000),
0.761: new Vector(0.978, 0.000, 0.000),
0.763: new Vector(0.971, 0.000, 0.000),
0.765: new Vector(0.971, 0.000, 0.000),
0.767: new Vector(0.963, 0.000, 0.000),
0.769: new Vector(0.963, 0.000, 0.000),
0.771: new Vector(0.955, 0.000, 0.000),
0.773: new Vector(0.955, 0.000, 0.000),
0.775: new Vector(0.947, 0.000, 0.000),
0.777: new Vector(0.947, 0.000, 0.000),
0.779: new Vector(0.939, 0.000, 0.000),
0.781: new Vector(0.939, 0.000, 0.000),
0.783: new Vector(0.931, 0.000, 0.000),
0.785: new Vector(0.931, 0.000, 0.000),
0.787: new Vector(0.924, 0.000, 0.000),
0.789: new Vector(0.924, 0.000, 0.000),
0.791: new Vector(0.916, 0.000, 0.000),
0.793: new Vector(0.916, 0.000, 0.000),
0.795: new Vector(0.908, 0.000, 0.000),
0.796: new Vector(0.908, 0.000, 0.000),
0.798: new Vector(0.900, 0.000, 0.000),
0.800: new Vector(0.900, 0.000, 0.000),
0.802: new Vector(0.892, 0.000, 0.000),
0.804: new Vector(0.892, 0.000, 0.000),
0.806: new Vector(0.884, 0.000, 0.000),
0.808: new Vector(0.884, 0.000, 0.000),
0.810: new Vector(0.876, 0.000, 0.000),
0.812: new Vector(0.876, 0.000, 0.000),
0.814: new Vector(0.869, 0.000, 0.000),
0.816: new Vector(0.869, 0.000, 0.000),
0.818: new Vector(0.861, 0.000, 0.000),
0.820: new Vector(0.861, 0.000, 0.000),
0.822: new Vector(0.853, 0.000, 0.000),
0.824: new Vector(0.853, 0.000, 0.000),
0.826: new Vector(0.845, 0.000, 0.000),
0.828: new Vector(0.845, 0.000, 0.000),
0.830: new Vector(0.837, 0.000, 0.000),
0.832: new Vector(0.837, 0.000, 0.000),
0.834: new Vector(0.829, 0.000, 0.000),
0.836: new Vector(0.829, 0.000, 0.000),
0.838: new Vector(0.822, 0.000, 0.000),
0.840: new Vector(0.822, 0.000, 0.000),
0.841: new Vector(0.814, 0.000, 0.000),
0.843: new Vector(0.814, 0.000, 0.000),
0.845: new Vector(0.806, 0.000, 0.000),
0.847: new Vector(0.806, 0.000, 0.000),
0.849: new Vector(0.798, 0.000, 0.000),
0.851: new Vector(0.798, 0.000, 0.000),
0.853: new Vector(0.790, 0.000, 0.000),
0.855: new Vector(0.790, 0.000, 0.000),
0.857: new Vector(0.782, 0.000, 0.000),
0.859: new Vector(0.782, 0.000, 0.000),
0.861: new Vector(0.775, 0.000, 0.000),
0.863: new Vector(0.775, 0.000, 0.000),
0.865: new Vector(0.767, 0.000, 0.000),
0.867: new Vector(0.767, 0.000, 0.000),
0.869: new Vector(0.759, 0.000, 0.000),
0.871: new Vector(0.759, 0.000, 0.000),
0.873: new Vector(0.751, 0.000, 0.000),
0.875: new Vector(0.751, 0.000, 0.000),
0.877: new Vector(0.743, 0.000, 0.000),
0.879: new Vector(0.743, 0.000, 0.000),
0.881: new Vector(0.735, 0.000, 0.000),
0.883: new Vector(0.735, 0.000, 0.000),
0.885: new Vector(0.727, 0.000, 0.000),
0.886: new Vector(0.727, 0.000, 0.000),
0.888: new Vector(0.720, 0.000, 0.000),
0.890: new Vector(0.720, 0.000, 0.000),
0.892: new Vector(0.712, 0.000, 0.000),
0.894: new Vector(0.712, 0.000, 0.000),
0.896: new Vector(0.704, 0.000, 0.000),
0.898: new Vector(0.704, 0.000, 0.000),
0.900: new Vector(0.696, 0.000, 0.000),
0.902: new Vector(0.696, 0.000, 0.000),
0.904: new Vector(0.688, 0.000, 0.000),
0.906: new Vector(0.688, 0.000, 0.000),
0.908: new Vector(0.680, 0.000, 0.000),
0.910: new Vector(0.680, 0.000, 0.000),
0.912: new Vector(0.673, 0.000, 0.000),
0.914: new Vector(0.673, 0.000, 0.000),
0.916: new Vector(0.665, 0.000, 0.000),
0.918: new Vector(0.665, 0.000, 0.000),
0.920: new Vector(0.657, 0.000, 0.000),
0.922: new Vector(0.657, 0.000, 0.000),
0.924: new Vector(0.649, 0.000, 0.000),
0.926: new Vector(0.649, 0.000, 0.000),
0.928: new Vector(0.641, 0.000, 0.000),
0.930: new Vector(0.641, 0.000, 0.000),
0.932: new Vector(0.633, 0.000, 0.000),
0.933: new Vector(0.633, 0.000, 0.000),
0.935: new Vector(0.625, 0.000, 0.000),
0.937: new Vector(0.625, 0.000, 0.000),
0.939: new Vector(0.618, 0.000, 0.000),
0.941: new Vector(0.618, 0.000, 0.000),
0.943: new Vector(0.610, 0.000, 0.000),
0.945: new Vector(0.610, 0.000, 0.000),
0.947: new Vector(0.602, 0.000, 0.000),
0.949: new Vector(0.602, 0.000, 0.000),
0.951: new Vector(0.594, 0.000, 0.000),
0.953: new Vector(0.594, 0.000, 0.000),
0.955: new Vector(0.586, 0.000, 0.000),
0.957: new Vector(0.586, 0.000, 0.000),
0.959: new Vector(0.578, 0.000, 0.000),
0.961: new Vector(0.578, 0.000, 0.000),
0.963: new Vector(0.571, 0.000, 0.000),
0.965: new Vector(0.571, 0.000, 0.000),
0.967: new Vector(0.563, 0.000, 0.000),
0.969: new Vector(0.563, 0.000, 0.000),
0.971: new Vector(0.555, 0.000, 0.000),
0.973: new Vector(0.555, 0.000, 0.000),
0.975: new Vector(0.547, 0.000, 0.000),
0.977: new Vector(0.547, 0.000, 0.000),
0.978: new Vector(0.539, 0.000, 0.000),
0.980: new Vector(0.539, 0.000, 0.000),
0.982: new Vector(0.531, 0.000, 0.000),
0.984: new Vector(0.531, 0.000, 0.000),
0.986: new Vector(0.524, 0.000, 0.000),
0.988: new Vector(0.524, 0.000, 0.000),
0.990: new Vector(0.516, 0.000, 0.000),
0.992: new Vector(0.516, 0.000, 0.000),
0.994: new Vector(0.508, 0.000, 0.000),
0.996: new Vector(0.508, 0.000, 0.000),
0.998: new Vector(0.500, 0.000, 0.000),
1.000: new Vector(0.500, 0.000, 0.000),
}