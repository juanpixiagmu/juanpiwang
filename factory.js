app.factory('homeFac', ['$http', function ($http) {
	return {
		getHomeData1 : function () {
			return $http.get('/data/global-03.json')
		},
		getHomeData2 : function () {
			return $http.get('/data/clothes.json')
		},
		getHomeData3 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData4 : function () {
			return $http.get('/data/global-baby.json')
		},
		getHomeData5 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData6 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData7 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData8 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getLunbo : function () {
			return $http.get('/data/beautyData.json')
		},
		getLunbo1 : function () {
			return $http.get('/data/digitalData.json')
		},
		getLunbo2 : function () {
			return $http.get('/data/global-02.json')
		},
	}	
}])
	.factory('totalMoney', ['cartServ', function (cartServ) {
		return {
			allMoney : function () {
				var money = 0;
				cartServ.getGoods().forEach(function (item) {
					money += (Number(item.cprice)*item.count)
				})
				return money
			}
			
		}
	}])
	.factory('limitFac', ['$http', function ($http) {
		return {
			getLimitGoods : function () {
				return $http.get('/data/global-03.json')
			}
		}
	}])
	
	.factory('show', ['$state', function ($state) {
		return {
			showShop : function (item) {
				$state.go('shop', {id:JSON.stringify(item)});
			},
			
			showGoods : function (item) {
				$state.go('goods',{id: JSON.stringify(item)})
			}
		}
	}])
	.factory('searchFac', ['$http', function ($http) {
		return {
			getData1 : function () {
				return $http.get('/data/baby.json')
			},
			getData2 : function () {
				return $http.get('/data/boyClothes.json')
			},
			getData3 : function () {
				return $http.get('/data/girlClothes.json')
			}
		}
	}])
	.factory('cangFac', ['$http', function ($http) {
		return {
			getData1 : function () {
				return $http.get('/data/livingHomeCookhouseGoodsData.json')
			},
			getData2 : function () {
				return $http.get('/data/livingHomeDepartmentGoodsData.json')
			},
			getData3 : function () {
				return $http.get('/data/livingHomeGoodsData.json')
			},
			getData4 : function () {
				return $http.get('/data/global-03.json')
			}
		}
	}])
	.factory('collectServ',[ function () {
		var collectArr = [];
		return {
			collectArr : function () {
				return collectArr;
			},
			
			src : function (item) {
				if(item) {
					console.log(item.flag)
					if(item.flag) {
						src="/shop/img/collect-hover.png";
					}else{
						src="/shop/img/collect.png";
					}
				}else{
					src="/shop/img/collect.png";
				}
		
				
				return src;
			},
			addCollect : function (item) {
				for (var shop of collectArr) {
					if (shop.brand_id == item.brand_id) {

						collectArr.splice(collectArr.indexOf(shop),1);
						return

					}
				}
				collectArr.push(item);

			},
			collectItemFn : function(item) {
				
				return collectArr;
			},
			
			
			
		}
	}])
