"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.all = exports.fetch = void 0;
/**
 * Program Management
 *
 * Most of the time, people will not need to actually go to network for this API (the options are present if you do need to however)
 * Instead they will probably rely on the default export, which returns IDs from abbreviations
 *
 */
var request_1 = __importDefault(require("../../util/request"));
// Actual API access
function fetch(id) {
    return __awaiter(this, void 0, void 0, function () {
        var programs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request_1.default("programs", {
                        id: id,
                    })];
                case 1:
                    programs = _a.sent();
                    if (programs.length < 1) {
                        return [2 /*return*/, Promise.reject(new Error("No program with id " + id))];
                    }
                    return [2 /*return*/, programs[0]];
            }
        });
    });
}
exports.fetch = fetch;
function all() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, request_1.default("programs", {})];
        });
    });
}
exports.all = all;
var programs = {
    VRC: 1,
    VEXU: 4,
    WORKSHOP: 37,
    CREATE: 40,
    VIQC: 41,
    DIS: 42,
    NRL: 43,
    RAD: 44,
    TVCR: 46,
    TIQC: 47,
    "VAIC-HS": 48,
    "VAIC-U": 49,
};
function get(abbr) {
    var _a;
    return (_a = programs[abbr]) !== null && _a !== void 0 ? _a : 0;
}
exports.get = get;
//# sourceMappingURL=index.js.map